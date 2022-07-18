import { useState, Fragment } from 'react';
import { BsPlusLg } from 'react-icons/bs';

import { getProductsByQuery } from '../../service/axios.config';

import {
  StyledForm,
  FormBtnMobile,
  FormBtn,
  FormLabel,
  FormInputWeight,
  FormInputProduct,
} from './DiaryAddProductFormStyle';

const loadOptions = async (inputValue, callback) => {
  console.log('inputValue:', inputValue);
  if (inputValue.length < 2) {
    return;
  }
  const { data } = await getProductsByQuery(inputValue);

  console.log('reseived:', data);
  callback(
    data.result.map(product => {
      const title = product.title;
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
            // defaultValue={selectedProduct}
            // onChange={option => setSelectedProduct(option.value)}
            // // loadOptions={_.debounce(loadOptions, 2000)}
            // loadOptions={loadOptions}
            // placeholder="Введіть назву продукту"
            // title="Введіть назву продукту"
            // cacheOptions

            value={selectedProduct}
            onChange={option => setSelectedProduct(option)}
            placeholder="Enter product name"
            noOptionsMessage={({ selectedProduct }) =>
              !selectedProduct
                ? 'Enter product name'
                : 'There is no such product'
            }
            loadingMessage={({ selectedProduct }) =>
              !selectedProduct ? 'Searching...' : 'There is no such product'
            }
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
