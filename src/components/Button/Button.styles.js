import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-block;
  padding: 13px 25px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #ffffff;
  cursor: pointer;
  &:hover,
  :focus {
    background: #f56905;
  }
`;
