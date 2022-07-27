import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/app/auth';
import { diarySelectors } from 'redux/app/diaryPerDay';

import {
  InfoList,
  InfoListItem,
  ListTitle,
  Span,
  Thumb,
} from './DailyCalorieIntake.styles';

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

  if (kcalLeft < 0) {
    kcalLeft = '000';
  }

  return (
    <Thumb>
      <ListTitle>Дані станом на {date}</ListTitle>
      <InfoList>
        <InfoListItem>
          <span>Залишилось</span>
          <span>{Math.round(kcalLeft) || '000'} кКал</span>
        </InfoListItem>
        <InfoListItem>
          <span>Споживається</span>
          <span>{Math.round(kcalConsumed) || '000'} кКал</span>
        </InfoListItem>
        <InfoListItem>
          <span>Добова норма</span>
          <span>{daylykCalCount || '000'} кКал</span>
        </InfoListItem>
        <InfoListItem>
          <span>n% від норми</span>
          <Span upperHandred={Math.round(percOfNorm) > 100}>
            {percOfNorm || '000'} %
          </Span>
        </InfoListItem>
      </InfoList>
    </Thumb>
  );
}
