import styled from "styled-components";

const FullWidthSection = styled.section`
  grid-column: 1 / span 14;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 84px)) 1fr;
  grid-template-rows: max-content;
  gap: ${(props) => (props.gd ? props.gd : "32px 32px")};
  margin: ${(props) => (props.md ? props.md : 0)};

  @media only screen and (max-width: 1024px) {
    grid-column: 1 / span 8;
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${(props) => (props.gm ? props.gm : "1rem 1rem")};
    margin: ${(props) => (props.mm ? props.mm : 0)};
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: ${(props) => (props.gs ? props.gs : "1rem 1rem")};
    margin: ${(props) => (props.ms ? props.ms : 0)};
  }
`;

export default FullWidthSection;
