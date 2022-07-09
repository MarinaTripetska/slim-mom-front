import { Btn } from './Button.styles';

export default function Button({ onClickHandler, btnText }) {
  return <Btn onClick={onClickHandler}>{btnText}</Btn>;
}
