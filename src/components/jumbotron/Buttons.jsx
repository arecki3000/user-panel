import styled from "styled-components";
import Row from "../../grid/Row";

const Buttons = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-ariund;
  grid-row: 3 / 5;
  padding: 0 36px;
  img {
    height: 59px;
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
    grid-row: 5 / 6;
  }
  @media (max-width: 500px) {
    grid-row: 5 / 6;
    justify-content: space-around;
    padding: 0;
    img {
      height: 41px;
    }
  }
`;

export default Buttons;
