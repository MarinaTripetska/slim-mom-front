import { ContainerStyledPlh } from 'components/MainContainer/MainContainer.styled';
import styled from 'styled-components';

export const Thumb = styled.div`
  ${ContainerStyledPlh};

  display: flex;
  justify-content: space-between;
  min-height: 40px;
  background-color: var(--secondary-background-color);
`;

export const BackButton = styled.button`
  border: none;
  padding: 10px 10px 10px 0;

  cursor: pointer;

  & img {
    width: 12px;
    height: 7px;
    transition: transform var(--transition-params);
  }

  :hover,
  :focus {
    & img {
      transform: scale(1.5);
    }
  }
`;

export const UserInfoThumb = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const UserName = styled.p`
  &::after {
    content: '';
    display: block;

    position: relative;
    left: 32px;
    bottom: 7px;

    width: 32px;
    height: 2px;

    transform: rotate(90deg);
    background-color: var(--border-color);
  }
`;

export const ExitButton = styled.button`
  border: none;
  padding: 10px 0;
  color: var(--secondary-text-color);

  cursor: pointer;
  transition: color var(--transition-params);

  :hover,
  :focus {
    color: var(--main-text-color);
  }
`;
