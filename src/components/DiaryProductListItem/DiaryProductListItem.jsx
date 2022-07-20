import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product, ProductInfo } from './DiaryProductListItem.styled';
import { diaryPerDayOperation } from '../../redux/app/diaryPerDay';
import { diarySelectors } from '../../redux/app/diaryPerDay/';
import ChoiceModal from '../../components/ChoiceModal';

export const DiaryProductListItem = ({ product }) => {
  const { weightGrm, _id } = product;

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const date = useSelector(diarySelectors.getCurrentDate);

  const payload = {
    productId: _id,
    date: date,
  };

  const handleDelete = () => {
    setShowModal(true);
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
          text={'видалення цього продукту'}
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
      <button type="button" onClick={handleDelete}>
        <GrClose />
      </button>
    </Product>
  );
};
