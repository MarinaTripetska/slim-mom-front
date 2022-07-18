import {
  SideBarDiv,
  ProdListDiv,
  ProdList,
  ListTitle,
  ProdDiv,
} from './SideBar.styles';
import { changeToUa } from 'helpers/translateProd';
import DailyCalorieIntake from 'components/DailyCalorieIntake';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';

export default function SideBar({
  date,
  kcalConsumed,
  // notRecommendProd = [],
  calorie,
}) {
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
          <ListTitle> Не рекомендована їжа</ListTitle>
          <ProdList>
            {notRecomendedProd.length > 0 ? (
              notRecomendedProd?.map(product => (
                <li key={product}>{changeToUa[product]}</li>
              ))
            ) : (
              <p>Тут відображатиметься ваша дієта</p>
            )}
          </ProdList>
        </ProdDiv>
      </ProdListDiv>
    </SideBarDiv>
  );
}
