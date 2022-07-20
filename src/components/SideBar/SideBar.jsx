import {
  SideBarDiv,
  ProdListDiv,
  ProdList,
  ListTitle,
  ProdDiv,
  AltText,
} from './SideBar.styles';
import { changeToUa } from 'helpers/translateProd';
import DailyCalorieIntake from 'components/DailyCalorieIntake';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';

export default function SideBar({ date, kcalConsumed, calorie }) {
  const notRecomendedProd = useSelector(authSelectors.getUserNotRecommendProd);

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

          {notRecomendedProd.length > 0 ? (
            <ProdList>
              {notRecomendedProd?.map(product => (
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
}
