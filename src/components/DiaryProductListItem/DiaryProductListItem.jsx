import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from 'react-icons/gr';

import { diaryPerDayOperation, diarySelectors } from 'redux/app/diaryPerDay';

import { ChoiceModal } from 'components/ChoiceModal';

import {
  BtnClose,
  Product,
  ProductCalories,
  ProductInfo,
  ProductName,
  ProductNameThumb,
  ProductWeight,
} from './DiaryProductListItem.styled';
import { ReactPortal } from 'components/ReactPortal';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';

export const DiaryProductListItem = ({ product }) => {
  const dispatch = useDispatch();
  const textThumbRef = useRef();
  const textRef = useRef();

  const { weightGrm, _id } = product;
  const [showModal, setShowModal] = useState(false);
  const date = useSelector(diarySelectors.getCurrentDate);
  const currentDate = new Date().toLocaleDateString();
  const isCurrentDay = date === currentDate;
  const isLoadingDeletedProd = useSelector(
    diarySelectors.getIsDeleteProductLoading,
  );

  useLayoutEffect(() => {
    const textThumbWidth = textThumbRef.current.clientWidth;
    const textWidth = textRef.current.clientWidth;

    if (textThumbWidth < textWidth) {
      textRef.current.classList.add('animate');
    } else {
      textRef.current.classList.remove('animate');
    }
  });

  const payload = {
    productId: _id,
    date: date,
  };

  const handleDelete = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const choiceHandler = answer => {
    if (answer) {
      dispatch(diaryPerDayOperation.actionDeleteProduct(payload));
    }
    setShowModal(false);
  };

  return (
    <>
      <Product>
        <ProductInfo>
          <ProductNameThumb ref={textThumbRef}>
            <ProductName ref={textRef}>{product.product.title.ua}</ProductName>
          </ProductNameThumb>
          <ProductWeight>{weightGrm} г</ProductWeight>
          <ProductCalories>{product.product.calories} кал</ProductCalories>
        </ProductInfo>

        {isCurrentDay && (
          <BtnClose
            type="button"
            onClick={handleDelete}
            disabled={isLoadingDeletedProd}
          >
            <GrClose />
          </BtnClose>
        )}
      </Product>

      {showModal && (
        <ReactPortal>
          <ChoiceModal
            text={'що хочете видалити цей продукт'}
            choiceHandler={choiceHandler}
            subText={product.product.title.ua}
          />
        </ReactPortal>
      )}
    </>
  );
};
