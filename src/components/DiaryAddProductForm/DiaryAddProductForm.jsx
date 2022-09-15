import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPlusLg } from 'react-icons/bs';
import { Rings } from 'react-loader-spinner';

import { diaryPerDayOperation, diarySelectors } from 'redux/app/diaryPerDay';
import { openModalAction } from 'redux/app/openModal';
import { getProductsByQuery } from '../../service/axios.config';

import {
  Form,
  FormBtnMobile,
  FormBtn,
  FormLabel,
  FormInputWeight,
  FormInputProduct,
  MobileAddProductFormWraper,
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

export const DiaryAddProductForm = () => {
  const dispatch = useDispatch();

  let [selectedProduct, setSelectedProduct] = useState(null);
  let [weight, setWeight] = useState('');

  const currentDate = new Date().toLocaleDateString('ru-RU');
  const isLoadingAddedProduct = useSelector(
    diarySelectors.getIsAddProductLoading,
  );

  const handleSubmit = async e => {
    e.preventDefault();

    const weightNumber = parseInt(weight);
    const { data: products } = await getProductsByQuery(selectedProduct.value);
    const productId = products.result[0]._id;

    dispatch(
      diaryPerDayOperation.actionAddProduct({
        date: currentDate,
        data: { product: productId, weightGrm: weightNumber },
      }),
    );

    dispatch(openModalAction(false));
    reset();
  };

  const reset = () => {
    setSelectedProduct(null);
    setWeight('');
  };

  return (
    <MobileAddProductFormWraper>
      <Form onSubmit={handleSubmit}>
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

        <FormBtnMobile
          type="submit"
          disabled={
            selectedProduct === null || weight === '' || isLoadingAddedProduct
          }
        >
          {isLoadingAddedProduct ? (
            <Rings color=" #FC842D" height={40} width={40} />
          ) : (
            'Додати'
          )}
        </FormBtnMobile>

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
      </Form>
    </MobileAddProductFormWraper>
  );
};
