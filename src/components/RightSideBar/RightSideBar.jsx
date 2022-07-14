import {
  SideBarDiv,
  ProdListDiv,
  ProdList,
  ListTitle,
} from './RightSideBar.styles';
import DailyCalorieIntake from 'components/DailyCalorieIntake';

export default function RightSideBar({ date, daylykCalCount, kcalConsumed }) {
  let prodList = ''; // Заглушка

  return (
    <SideBarDiv>
      <ProdListDiv>
        <DailyCalorieIntake
          date={date}
          daylykCalCount={daylykCalCount}
          kcalConsumed={kcalConsumed}
        />
        <ListTitle>Food not recommended</ListTitle>
        <ProdList>{prodList || 'Your diet will be displayed here'}</ProdList>
      </ProdListDiv>
    </SideBarDiv>
  );
}
