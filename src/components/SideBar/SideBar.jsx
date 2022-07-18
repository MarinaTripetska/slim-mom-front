import {
  SideBarDiv,
  ProdListDiv,
  ProdList,
  ListTitle,
  ProdDiv,
} from './SideBar.styles';
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
          <ListTitle>Food not recommended</ListTitle>
          <ProdList>
            {notRecomendedProd.length > 0 ? (
              notRecomendedProd?.map(product => (
                <li key={product}>{product}</li>
              ))
            ) : (
              <p>Your diet will be displayed here</p>
            )}
          </ProdList>
        </ProdDiv>
      </ProdListDiv>
    </SideBarDiv>
  );
}
