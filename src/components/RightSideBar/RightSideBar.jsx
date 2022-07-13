import {
  InfoList,
  InfoListItem,
  SideBarDiv,
  ProdListDiv,
  ProdList,
  ListTitle,
} from './RightSideBar.styles';

export default function RightSideBar() {
  let l = '1'; // Заглушка
  let сons = ''; // Заглушка
  let dr = '2'; // Заглушка
  let pon = ''; // Заглушка
  let date = '06/20/2020'; // Заглушка
  let prodList = ''; // Заглушка

  return (
    <SideBarDiv>
      <InfoList>
        <ListTitle>Summary for {date}</ListTitle>
        <InfoListItem>
          <span>Left</span>
          <span>{l || '000'} kcal</span>
        </InfoListItem>
        <InfoListItem>
          <span>Consumed</span>
          <span>{сons || '000'} kcal</span>
        </InfoListItem>
        <InfoListItem>
          <span>Daily rate</span>
          <span>{dr || '000'} kcal</span>
        </InfoListItem>
        <InfoListItem>
          <span>n% of normal</span>
          <span>{pon || '000'} kcal</span>
        </InfoListItem>
      </InfoList>
      <ProdListDiv>
        <ListTitle>Food not recommended</ListTitle>
        <ProdList>{prodList || 'Your diet will be displayed here'}</ProdList>
      </ProdListDiv>
    </SideBarDiv>
  );
}
