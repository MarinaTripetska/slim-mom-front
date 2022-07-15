import { useState, Fragment } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import {
  StyledForm,
  FormBtnMobile,
  FormBtn,
  FormLabel,
  FormInputWeight,
  FormInputProduct,
} from './DiaryAddProductFormStyle';
import { getProductByQuery } from '../../service/axios.config';

const loadOptions = async (inputValue, callback) => {
  const { data } = await getProductByQuery(inputValue);
  callback(
    data.result.map(product => {
      const title = product.title;
      
      return { label: title, value: title };
      
    })
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
            value={selectedProduct}
            onChange={option => setSelectedProduct(option)}
            loadOptions={loadOptions}
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
            title="Enter product weight"
            required
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Grams"
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
