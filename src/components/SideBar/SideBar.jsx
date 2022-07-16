import { SideBarDiv, ProdListDiv, ProdList, ListTitle } from './SideBar.styles';
import DailyCalorieIntake from 'components/DailyCalorieIntake';

export default function SideBar({
  date,
  kcalConsumed,
  notRecommendProd,
  calorie,
}) {
  return (
    <SideBarDiv>
      <ProdListDiv>
        <DailyCalorieIntake
          date={date}
          daylykCalCount={calorie}
          kcalConsumed={kcalConsumed}
        />
        <ListTitle>Food not recommended</ListTitle>
        <ProdList>
          {notRecommendProd?.map(product => (
            <li key={product}>{product}</li>
          ))}
          {/* || 'Your diet will be displayed here' */}
        </ProdList>
      </ProdListDiv>
    </SideBarDiv>
  );
}
