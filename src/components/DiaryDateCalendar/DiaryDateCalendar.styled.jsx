import styled from 'styled-components';
import Datetime from 'react-datetime';
import { breakpoints } from 'assets/sizes';

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  @media ${breakpoints.maxTablet} {
  margin-top:40px;}
  @media ${breakpoints.tablet} {
    align-items: baseline;
  }
`;

export const DatePicker = styled(Datetime)`
  width: 120px;
  font-size: 18px;
  line-height: 1.21;
  letter-spacing: 0em;

  .rdtPicker {
    .rdtToday {
      color: var(--accent-color);
    }
    td.rdtToday:before {
      content: none;
    }
    td.rdtActive {
      background-color: var(--accent-shadow);

      :hover {
        background-color: var(--accent-color);
      }
    }
  }

  & input {
    width: 120px;
    border: none;
  }

  @media ${breakpoints.tablet} {
    width: 230px;
    font-size: 18px;

    & input {
      font-size: 34px;
      width: 230px;
    }
  }
`;
