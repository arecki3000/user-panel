import styled from "styled-components";
import Row from "../../grid/Row";

const Quote = styled(Row)`
  display: flex;
  grid-row: 2 / 3;
  align-items: flex-end;
  text-align: left;
  padding: 27px 36px;
  font-family: "Proxima Nova - Semibold";
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  @media (max-width: 1024px) {
    grid-row: 4 / 5;
    grid-column: 1 / span 6;
    text-align: center;
    padding: 0;
    justify-content: center;
    align-items: flex-end;
    color: #3e495e;
  }
  @media only screen and (max-width: 768px) {
    grid-row: 4 / 5;
    align-items: flex-end;
  }
`;

export default Quote;
