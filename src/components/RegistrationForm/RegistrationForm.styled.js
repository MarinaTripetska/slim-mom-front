import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../assets/sizes';

export const ContainerRegistr = styled.div`
  padding: 42px 20px 100px 20px;
  margin-left: auto;
  margin-right: auto;

  @media ${breakpoints.tablet} {
    padding: 160px 32px 418px 32px;
    min-width: 768px;
  }
  @media ${breakpoints.desktop} {
    padding: 160px 16px 180px 16px;
    min-width: 1280px;
  }
`;
export const TitleRegistr = styled.h2`
  color: rgba(252, 132, 45, 1);
  text-transform: uppercase;
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: 0.04em;
  margin-top: 0;
  text-align: center;
  @media ${breakpoints.tablet} {
    text-align: start;
  }
`;
export const FormRegistr = styled.form``;

export const FormRegistrList = styled.ul`
  margin: 60px 0;
  list-style: none;
  padding: 0;
`;
export const FormRegistrItem = styled.li`
  margin-bottom: 0;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
export const FormRegistrLabel = styled.label`
  display: flex;
  width: auto;
  height: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const FormRegistrInput = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  height: 20px;
  width: 100%;
  outline: none;

  @media ${breakpoints.tablet} {
    width: 240px;
  }
`;

export const Message = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: rgba(252, 132, 45, 1);
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;

  display: flex;
  gap: 32px;
  @media ${breakpoints.maxTablet} {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const plaseholderButtonStyles = css`

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 180px;

  background: var(--accent-color);
  box-shadow: 0px 4px 10px var(--accent-shadow);
  border-radius: 30px;
  border-color: rgba(117, 190, 218, 0);
  padding: 13px 25px;
  color: var(--white);
  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid var(--accent-color);
    box-shadow: none;
    color: var(--accent-color);
    background: transparent;
  }

  
  }
`;

export const RegistrButton = styled.button`
  ${plaseholderButtonStyles}
`;

export const StyledNavLink = styled(Link)`
  ${plaseholderButtonStyles}
`;
