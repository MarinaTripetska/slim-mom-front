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
    const weightNumber = parseInt(weight);
    if (!selectedProduct || isNaN(weightNumber)) return;
    onSubmit({
      product: selectedProduct.value,
      weight: weightNumber,
    });

    reset();
  };

  const reset = () => {
    setSelectedProduct(null);
    setWeight('');
  };

  return (
    <Fragment>
      <StyledForm onSubmit={handleSubmit} className={className}>
        <FormLabel>
          <FormInputProduct
            isClearable
            backspaceRemovesValue
            escapeClearsValue
            classNamePrefix={'react-select'}
<<<<<<< HEAD
            defaultValue={selectedProduct}
            onChange={option => setSelectedProduct(option.value)}
            // loadOptions={_.debounce(loadOptions, 2000)}
            loadOptions={loadOptions}
            placeholder="Введіть назву продукту"
            title="Введіть назву продукту"
            cacheOptions
=======
            value={selectedProduct}
            onChange={option => setSelectedProduct(option)}
            // loadOptions={loadOptions}
            placeholder="Enter product name"
            noOptionsMessage={({ selectedProduct }) =>
              !selectedProduct
                ? 'Enter product name'
                : 'There is no such product'
            }
            loadingMessage={({ selectedProduct }) =>
              !selectedProduct ? 'Searching...' : 'There is no such product'
            }
>>>>>>> c9ea91e54f7428cc5eec339751a72ff5b492ddf6
          />
        </FormLabel>
        <FormLabel>
          <FormInputWeight
            type="number"
            min={1}
            name="weight"
<<<<<<< HEAD
            title="Введіть вагу продукту"
            required
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Грами"
=======
            title="Enter product weight"
            required
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Grams"
>>>>>>> c9ea91e54f7428cc5eec339751a72ff5b492ddf6
          />
        </FormLabel>
        <FormBtnMobile type="submit">Add</FormBtnMobile>

        <FormBtn
          type="submit"
          disabled={selectedProduct === null || weight === '' ? true : false}
        >
          <BsPlusLg size={14} />
        </FormBtn>
      </StyledForm>
    </Fragment>
  );
}
