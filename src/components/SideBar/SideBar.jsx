import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/app/auth';
import { changeToUa } from 'helpers/translateProd';

import { DailyCalorieIntake } from 'components/DailyCalorieIntake';

import { Thumb, ProdThumb, List, Title, AltText } from './SideBar.styles';

export const SideBar = ({ date, kcalConsumed, calorie }) => {
  const notRecommendedProd = useSelector(authSelectors.getUserNotRecommendProd);

  return (
    <Thumb>
      <DailyCalorieIntake
        date={date.replace(/\./g, '/')}
        daylykCalCount={calorie}
        kcalConsumed={kcalConsumed}
      />

      <ProdThumb>
        <Title>Не рекомендована їжа</Title>

        {notRecommendedProd.length > 0 ? (
          <List>
            {notRecommendedProd?.map(product => (
              <li key={product}>{changeToUa[product]}</li>
            ))}
          </List>
        ) : (
          <AltText>Тут відображатимуться не рекомендовані Вам продукти</AltText>
        )}
      </ProdThumb>
    </Thumb>
  );
};
