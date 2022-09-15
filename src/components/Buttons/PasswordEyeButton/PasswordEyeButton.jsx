import { breakpoints } from 'assets/sizes';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import styled from 'styled-components';

const PasswordButton = styled.button`
  width: 24px;
  position: absolute;
  right: 0px;
  top: 0px;
  border: none;

  @media ${breakpoints.minTablet} {
    left: 215px;
  }
`;
const ShowPasswordIcon = styled(FiEye)`
  color: var(--secondary-text-color);
  font-size: 20px;
`;

const HidePasswordIcon = styled(FiEyeOff)`
  color: var(--secondary-text-color);
  font-size: 20px;
`;

export const PasswordEyeButton = ({ handleClick, show }) => {
  return (
    <PasswordButton type="button" onClick={handleClick}>
      {show ? <ShowPasswordIcon /> : <HidePasswordIcon />}
    </PasswordButton>
  );
};
