import { BsPlusLg } from 'react-icons/bs';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  box-shadow: 0 4px 10px var(--accent-shadow);
  border-radius: 50%;

  width: 176px;
  height: 44px;

  transition: background 200ms linear, color 200ms linear;
  cursor: pointer;

  &:hover {
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const AddButton = () => {
  return (
    <ButtonStyled>
      <BsPlusLg size={14} />
    </ButtonStyled>
  );
};
