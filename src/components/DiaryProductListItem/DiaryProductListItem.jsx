import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product, ProductInfo } from './DiaryProductListItem.styled';
import { diaryPerDayOperation } from '../../redux/app/diaryPerDay';
import { diarySelectors } from '../../redux/app/diaryPerDay/';
import ChoiceModal from '../../components/ChoiceModal';
import { Rings } from 'react-loader-spinner';

export const DiaryProductListItem = ({ product }) => {
  const dispatch = useDispatch();

  const { weightGrm, _id } = product;
  const [showModal, setShowModal] = useState(false);
  const date = useSelector(diarySelectors.getCurrentDate);
  const currentDate = new Date().toLocaleDateString();
  const isCurrentDay = date === currentDate;
  const isLoadingDeletedProd = useSelector(
    diarySelectors.getIsDeleteProductLoading,
  );

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
  };

  const closeModalHandle = () => {
    setShowModal(false);
  };

  return (
    <Product>
      {showModal && (
        <ChoiceModal
          text={'що хочете видалити цей продукт'}
          choiceHandler={choiceHandler}
          closeModalHandle={closeModalHandle}
          subText={product.product.title.ua}
        />
      )}

      <ProductInfo>
        <div>{product.product.title.ua}</div>
        <div>{weightGrm} грам</div>
        <div>{product.product.calories}кКал</div>
      </ProductInfo>

      {isCurrentDay && (
        <button
          type="button"
          onClick={handleDelete}
          disabled={isLoadingDeletedProd}
        >
          {/* {isLoadingDeletedProd ? (
            <Rings color=" #FC842D" height={40} width={40} />
          ) : ( */}
          <GrClose />
          {/* )} */}
        </button>
      )}
    </Product>
  );
};
