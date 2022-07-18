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
        <ListTitle>Summary for {date}</ListTitle>
        <InfoListItem>
          <span>Left</span>
          <span>{kcalLeft || '000'} kcal</span>
        </InfoListItem>
        <InfoListItem>
          <span>Consumed</span>
          <span>{kcalConsumed || '000'} kcal</span>
        </InfoListItem>
        <InfoListItem>
          <span>Daily rate</span>
          <span>{daylykCalCount || '000'} kcal</span>
        </InfoListItem>
        <InfoListItem>
          <span>n% of normal</span>
          <span>{percOfNorm || '000'} %</span>
        </InfoListItem>
      </InfoList>
    </>
  );
}
