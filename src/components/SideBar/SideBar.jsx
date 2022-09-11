import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/app/auth';
import { changeToUa } from 'helpers/translateProd';

import { DailyCalorieIntake } from 'components/DailyCalorieIntake';

import {
  SideBarDiv,
  ProdListDiv,
  ProdList,
  ListTitle,
  ProdDiv,
  AltText,
} from './SideBar.styles';

export const SideBar = ({ date, kcalConsumed, calorie }) => {
  const notRecommendedProd = useSelector(authSelectors.getUserNotRecommendProd);

  return (
    <SideBarDiv>
      <ProdListDiv>
        <DailyCalorieIntake
          date={date.replace(/\./g, '/')}
          daylykCalCount={calorie}
          kcalConsumed={kcalConsumed}
        />
        <ProdDiv>
          <ListTitle>Не рекомендована їжа</ListTitle>

          {notRecommendedProd.length > 0 ? (
            <ProdList>
              {notRecommendedProd?.map(product => (
                <li key={product}>{changeToUa[product]}</li>
              ))}
            </ProdList>
          ) : (
            <AltText>
              Тут відображатимуться не рекомендовані Вам продукти
            </AltText>
          )}
        </ProdDiv>
      </ProdListDiv>
    </SideBarDiv>
  );
};
