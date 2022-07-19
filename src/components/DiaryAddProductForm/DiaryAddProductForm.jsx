import { useState, Fragment } from 'react';
import { BsPlusLg } from 'react-icons/bs';
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
} from './DiaryAddProductFormStyle';

const loadOptions = async (inputValue, callback) => {
  console.log('inputValue:', inputValue);
  if (inputValue.length < 2){
    return;
  }
 
  const { data } = await getProductsByQuery(inputValue);
  console.log('reseived:', data);
  callback(
    data.result.map(product => {
      const title = product.title;
      return { label: title,value: title };
    }),
  );
};

export default function DiaryProductForm({ onSubmit, className }) {
  let [selectedProduct, setSelectedProduct] = useState("");
  let [weight, setWeight] = useState('');
  const isLoading = useSelector(diarySelectors.getIsLoading);

  const handleSubmit = async event => {
    event.preventDefault();
    const weightNumber = parseInt(weight);
    if (!selectedProduct || isNaN(weightNumber) || null) return;

    const { data: products } = await getProductsByQuery(selectedProduct);
    const productId = products.result[0]._id;

    onSubmit({
      product: productId,
      weight: weightNumber,
    });

    reset();
  };

  const reset = () => {
    setSelectedProduct("");
    setWeight('');
  };

  return (
    <Fragment>
      <StyledForm onSubmit={handleSubmit} className={className}>
        <FormLabel>
          <FormInputProduct
            classNamePrefix={'react-select'}
            input={selectedProduct}
          
            controlShouldRenderValue={true}
            isClearable
            backspaceRemovesValue
            escapeClearsValue
            onChange={option => setSelectedProduct(option.value)}
            loadOptions={loadOptions}
            placeholder="Введіть назву продукту"
            
            // onChange={option => setSelectedProduct(option)}
            // // placeholder="Enter product name"
            noOptionsMessage={({ selectedProduct }) =>
              !selectedProduct
                ? 'немає продуктів'
                : 'Такого продукту немає'
            }
            // loadingMessage={({ selectedProduct }) =>
            //   !selectedProduct ? 'Searching...' : 'There is no such product'
            // }
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
        <FormBtnMobile type="submit">Додати</FormBtnMobile>
        <FormBtn
          type="submit"
          disabled={selectedProduct === null || weight === '' || isLoading}
          // onClick={e =>setSelectedProduct("fsd")}
        >
          {/* {isLoading ? 'Loading' : <BsPlusLg size={14} />} */}
          <BsPlusLg size={14} />
        </FormBtn>
      </StyledForm>
    </Fragment>
  );
}
