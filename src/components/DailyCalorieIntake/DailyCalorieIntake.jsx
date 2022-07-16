import { InfoList, InfoListItem, ListTitle } from './DailyCalorieIntake.styles';

export default function DailyCalorieIntake({
  date,
  daylykCalCount,
  kcalConsumed,
}) {
  let kcalLeft = daylykCalCount - kcalConsumed;
  let percOfNorm = ~~((kcalConsumed / daylykCalCount) * 100);

  return (
    <>
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
    </>
  );
}
