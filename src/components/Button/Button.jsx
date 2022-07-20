import { Btn } from './Button.styles';

export default function Button({
  onClickHandler,
  btnText,
  type,
  disabled,
  autofocus,
}) {
  return (
    <Btn
      onClick={onClickHandler}
      type={type}
      disabled={disabled}
      autoFocus={autofocus}
    >
      {btnText}
    </Btn>
  );
}
