import styled from "styled-components";
import MaxWidthSection from "../../grid/MaxWidthSection";

const Jumbotron = styled(MaxWidthSection)`
  background-color: #ffffff;
  box-shadow: 0 0 40px rgba(49, 92, 173, 0.12);
  border-radius: 25px;
  grid-template-rows: 224px 118px 33px 108px;
  @media only screen and (max-width: 1024px) {
    grid-template-rows: 224px 118px 33px 108px 141px;
  }
`;
export default Jumbotron;
