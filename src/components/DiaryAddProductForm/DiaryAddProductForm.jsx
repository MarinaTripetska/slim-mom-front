
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
import { getProductByQuery } from '../../service/productsApi';

const loadOptions = async (inputValue, callback) => {
  const { products } = await getProductByQuery(inputValue);
  callback(
    products.map(product => {
      const title = product.title.ua;
      return { label: title, value: title };
    })
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
            loadOptions={loadOptions}
            placeholder="Введите название продукта"
          />
        </FormLabel>
        <FormLabel>
          <FormInputWeight
            type="number"
            min={1}
            name="weight"
            title="Введите вес продукта"
            required
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Грамм"
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