import {
  InfoList,
  InfoListItem,
  SideBarDiv,
  ProdListDiv,
  ProdList,
  ListTitle,
} from './RightSideBar.styles';

export default function RightSideBar({ date, daylykCalCount, kcalConsumed }) {
  let kcalLeft = daylykCalCount - kcalConsumed;
  let percOfNorm = (kcalConsumed / daylykCalCount) * 100;
  date = '06/20/2020'; // Заглушка
  let prodList = ''; // Заглушка

  return (
    <SideBarDiv>
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
      <ProdListDiv>
        <ListTitle>Food not recommended</ListTitle>
        <ProdList>{prodList || 'Your diet will be displayed here'}</ProdList>
      </ProdListDiv>
    </SideBarDiv>
  );
}
