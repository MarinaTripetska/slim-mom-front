import { SideBarDiv, ProdListDiv, ProdList, ListTitle } from './SideBar.styles';
import DailyCalorieIntake from 'components/DailyCalorieIntake';

export default function SideBar({
  date,
  kcalConsumed,
  notRecommendProd =[],
  calorie,
}) {
  return (
    <SideBarDiv>
      <ProdListDiv>
        <DailyCalorieIntake
          date={date.replace(/\./g, "/")}
          daylykCalCount={calorie}
          kcalConsumed={kcalConsumed}
        />
        <ListTitle>Food not recommended</ListTitle>
        <ProdList>
          {notRecommendProd.length > 0 ? notRecommendProd?.map(product => (
            <li key={product}>{product}</li>
          )) : <p>Your diet will be displayed here</p>}
        </ProdList>
      </ProdListDiv>
    </SideBarDiv>
  );
}
