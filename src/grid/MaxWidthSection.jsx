import styled from "styled-components";

const MaxWidthSection = styled.section`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 84px));
  grid-template-rows: max-content;
  gap: ${(props) => (props.gd ? props.gd : "32px 32px")};
  margin: ${(props) => (props.md ? props.md : 0)};

  @media only screen and (max-width: 1024px) {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    gap: ${(props) => (props.gm ? props.gm : "1rem 1rem")};
    margin: ${(props) => (props.mm ? props.mm : 0)};
  }

  @media only screen and (max-width: 768px) {
    grid-column: 1 / span 8;
    gap: ${(props) => (props.gs ? props.gs : "1rem 1rem")};
    margin: ${(props) => (props.ms ? props.ms : 0)};
  }
`;

export default MaxWidthSection;
