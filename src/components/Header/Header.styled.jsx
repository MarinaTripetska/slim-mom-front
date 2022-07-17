
import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';


export const HeaderStyled = styled.header`

  height: 80px;
  border-bottom: 2px solid var(--border-color);
  // @media ${breakpoints.mobile} {
    display:flex;
    flex-direction: row;

    align-items:center;
    
    justify-content: space-between;
    
    // height: 150px;  
    // border: none;
  // }
  @media ${breakpoints.laptop} {
    display:flex;
    flex-direction: row;
    align-items:end;
    justify-content: start;
    height: 150px;  
    border: none;
  }
  
`;
