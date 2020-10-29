import styled from "styled-components";
import Row from "../../grid/Row";

const Tokens = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-row: 3 / 5;
  padding-left: 36px;
  img {
    width: 41px;
    height: 41px;
  }
  @media (max-width: 1024px) {
    justify-content: space-around;
    padding: 0;
    img {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: 768px) {
    grid-row: 2 / 4;
  }
`;

export default Tokens;
