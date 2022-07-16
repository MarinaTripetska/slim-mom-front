import { useState, Fragment } from 'react';
import { BsPlusLg } from 'react-icons/bs';
// import debounce from 'debounce';
import debounce from 'lodash.debounce';
import _ from 'lodash';

import {
  StyledForm,
  FormBtnMobile,
  FormBtn,
  FormLabel,
  FormInputWeight,
  FormInputProduct,
} from './DiaryAddProductFormStyle';
import { getProductByQuery } from '../../service/axios.config';

// var debounce = require('lodash.debounce');
// const _ = require('lodash');

// const debounced = debounce(getProductByQuery, 2000);

const loadOptions = async (inputValue, callback) => {
  console.log('inputValue:', inputValue);
  if (inputValue.length < 3) {
    return;
  }
  console.log('пошла жара на сервер!');
  const { data } = await getProductByQuery(inputValue);
  // const { data } = await debounced(inputValue);

  console.log('reseived:', data);
  callback(
    data.result.map(product => {
      const title = product.title;
      // console.log('title:', title);
      return { label: title, value: title };
    }),
  );
};

export default function DiaryProductForm({ onSubmit, className }) {
  let [selectedProduct, setSelectedProduct] = useState(null);
  let [weight, setWeight] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      product: selectedProduct,
      weight: weight,
    });

    reset();
  };

  const reset = () => {
    setSelectedProduct('');
    setWeight('');
  };

  return (
    <Fragment>
      <StyledForm onSubmit={handleSubmit} className={className}>
        <FormLabel>
          <FormInputProduct
            classNamePrefix={'react-select'}
            defaultValue={selectedProduct}
            onChange={option => setSelectedProduct(option.value)}
            // loadOptions={_.debounce(loadOptions, 2000)}
            loadOptions={loadOptions}
            placeholder="Введіть назву продукту"
            title="Введіть назву продукту"
            cacheOptions
          />
        </FormLabel>
        <FormLabel>
          <FormInputWeight
            type="number"
            min={1}
            name="weight"
            title="Введіть вагу продукту"
            required
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Грами"
          />
        </FormLabel>
        <FormBtnMobile type="submit">Добавить</FormBtnMobile>

        <FormBtn
          type="submit"
          // selectedProduct должны прийти с бека
          disabled={selectedProduct === null || weight === '' ? true : false}
        >
          <BsPlusLg size={14} />
        </FormBtn>
      </StyledForm>
    </Fragment>
  );
}
