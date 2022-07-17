import styled from 'styled-components';

export const NavThumb = styled.div`
  padding-right: 20px;

  display: flex;
  flex-direction: row;
  gap: 16px;
  font-family: 'Gotham Pro';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 13px;
letter-spacing: 0.04em;
text-transform: uppercase;
padding-bottom:4px;
color: #9B9FAA;
@media (min-width:768px){

}
  @media (min-width:1024px){
    &::before {
      content: '';
      display: block;
      width: 32px;
      margin-top: 5px;
      height: 1px;
      background-color: grey;
      transform: rotate(90deg);
    }
  }
  
`;
