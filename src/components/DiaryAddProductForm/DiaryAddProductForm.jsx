import { useState, Fragment } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { Rings } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { diarySelectors } from 'redux/app/diaryPerDay';
import { getProductsByQuery } from '../../service/axios.config';

import {
  StyledForm,
  FormBtnMobile,
  FormBtn,
  FormLabel,
  FormInputWeight,
  FormInputProduct,
} from './DiaryAddProductForm.styled';

const loadOptions = async (inputValue, callback) => {
  if (inputValue.length < 2) {
    return;
  }
  const { data } = await getProductsByQuery(inputValue);

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

  const isLoadingAddedProduct = useSelector(
    diarySelectors.getIsAddProductLoading,
  );

  const handleSubmit = async event => {
    event.preventDefault();
    const weightNumber = parseInt(weight);
    if (!selectedProduct || isNaN(weightNumber)) return;

    const { data: products } = await getProductsByQuery(selectedProduct.value);
    const productId = products.result[0]._id;

    onSubmit({
      product: productId,
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
            classNamePrefix={'react-select'}
            value={selectedProduct}
            onChange={setSelectedProduct}
            loadOptions={loadOptions}
            placeholder="Введіть назву продукту"
            title="Введіть назву продукту"
            cacheOptions
            noOptionsMessage={({ inputValue }) =>
              inputValue ? 'Такого продукту нема' : 'Введіть назву продукту'
            }
            isClearable
            backspaceRemovesValue
            escapeClearsValue
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
        <FormBtnMobile type="submit">Додати</FormBtnMobile>
        <FormBtn
          type="submit"
          disabled={
            selectedProduct === null || weight === '' || isLoadingAddedProduct
          }
        >
          {isLoadingAddedProduct ? (
            <Rings color=" #FC842D" height={40} width={40} />
          ) : (
            <BsPlusLg size={14} />
          )}
        </FormBtn>
      </StyledForm>
    </Fragment>
  );
}
