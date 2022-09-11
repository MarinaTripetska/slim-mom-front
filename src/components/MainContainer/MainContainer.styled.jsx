import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';
import { css } from 'styled-components';

export const ContainerStyledPlh = css`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1280px;

  @media ${breakpoints.minTablet} {
    padding: 0 32px;
  }

  @media ${breakpoints.desktop} {
    padding: 0 16px;
  }
`;

export const ContainerStyled = styled.div`
  ${ContainerStyledPlh}
`;
