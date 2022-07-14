import styled from "styled-components";

export const ProductsListThumb = styled.div
`
 position: relative;
 @media screen and (min-width: 768px) {
    :before{
    width: 634px; 
    position: absolute;
    bottom: 0;
    height: 50px;
    left: 0;
    right: 0;
    background: linear-gradient(0, var(--white), transparent);
    content: "";
  }}
  `
export const ProductsList = styled.ul
`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    
@media screen and (min-width: 768px) {
    overflow-y: scroll;
    height: 240px;
    width: 640px;
    
    ::-webkit-scrollbar { width: 6px;  }
    ::-webkit-scrollbar-thumb {background:rgb(38, 64, 97); }
    ::-webkit-scrollbar-track { background: var(--secondary-background-color)}
}
@media screen and (min-width: 1280px) {
    height: 270px;
   
}
`