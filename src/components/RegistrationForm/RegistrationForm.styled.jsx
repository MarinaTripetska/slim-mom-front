import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../assets/sizes';
import { ButtonStylePlh } from 'components/Buttons/Button/Button.styled';
import { ContainerStyledPlh } from 'components/MainContainer';

export const Thumb = styled.div`
  ${ContainerStyledPlh};
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${breakpoints.minTablet} {
    padding-top: 160px;
  }
  @media ${breakpoints.desktop} {
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: var(--accent-color);

  margin-bottom: 60px;

  @media ${breakpoints.minTablet} {
    text-align: start;
  }
`;

export const Form = styled.form``;

export const FormList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-bottom: 60px;
`;

export const FormItem = styled.li`
  position: relative;
`;
export const Label = styled.label`
  display: flex;
  height: 16px;

  color: var(--secondary-text-color);
`;

export const Input = styled.input`
  height: 20px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--border-color);

  @media ${breakpoints.minTablet} {
    max-width: 240px;
  }
`;

export const Message = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: var(--accent-color);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 32px;

  @media ${breakpoints.maxMobile} {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Button = styled.button`
  ${ButtonStylePlh};
  max-width: 180px;
`;

export const StyledNavLink = styled(Link)`
  ${ButtonStylePlh};
  max-width: 180px;
`;
