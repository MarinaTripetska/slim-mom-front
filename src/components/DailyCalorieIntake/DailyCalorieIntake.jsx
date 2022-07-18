import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';
import { diarySelectors } from 'redux/app/diaryPerDay';
import { InfoList, InfoListItem, ListTitle } from './DailyCalorieIntake.styles';

export default function DailyCalorieIntake({ date }) {
  const daylykCalCount = useSelector(authSelectors.getUserAdviceCalorie);
  const products = useSelector(diarySelectors.getDiaryProducts);
  const isAnyProducts = products !== null && products.length > 0;
  let kcalConsumed = 0;

  if (isAnyProducts) {
    kcalConsumed = products
      .map(({ product, weightGrm }) => (weightGrm / 100) * product.calories)
      .reduce((p, c) => p + c, 0);
  }

  let kcalLeft = daylykCalCount - kcalConsumed;
  let percOfNorm = ~~((kcalConsumed / daylykCalCount) * 100);

  return (
    <>
      <InfoList>
        <ListTitle>Дані станом на {date}</ListTitle>
        <InfoListItem>
          <span>Залишилось</span>
          <span>{kcalLeft || '000'} кКал</span>
        </InfoListItem>
        <InfoListItem>
          <span>Споживається</span>
          <span>{kcalConsumed || '000'} кКал</span>
        </InfoListItem>
        <InfoListItem>
          <span>Добова норма</span>
          <span>{daylykCalCount || '000'} кКал</span>
        </InfoListItem>
        <InfoListItem>
          <span>n% від норми</span>
          <span>{percOfNorm || '000'} %</span>
        </InfoListItem>
      </InfoList>
    </>
  );
}
