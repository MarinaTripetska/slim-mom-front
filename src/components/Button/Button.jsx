import { Btn } from './Button.styles';

export default function Button({ onClickHandler, btnText, type, disabled }) {
  return (
    <Btn onClick={onClickHandler} type={type} disabled={disabled}>
      {btnText}
    </Btn>
  );
}
