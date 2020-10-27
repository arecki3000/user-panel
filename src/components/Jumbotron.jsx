import React from "react";
import styled from "styled-components";

const JumbotronWrapper = styled.div`
  display: grid;
  grid-template-rows: 224px 118px 33px 108px;
  grid-template-columns: 1fr 151px 1fr;
  width: 100%;
  height: 478px;
  background-color: #ffffff;
  box-shadow: 0 0 40px rgba(49, 92, 173, 0.12);
  border-radius: 25px;
  @media (max-width: 768px) {
    grid-template-rows: 184px 118px 33px 1fr;
  }
`;

const JumbotronCoverImage = styled.div`
  width: 100%;
  grid-row: 1 / 3;
  grid-column: 1 / 4;
  background: #3e495e;
  border-radius: 25px;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 151px;
  height: 151px;
  grid-row: 2 / 4;
  grid-column: 2 / 3;
  background: #ffffff;
  border-radius: 50%;
  z-index: 1;
`;

const Avatar = styled.div`
  width: 123px;
  height: 123px;
  background: #3e495e;
  border-radius: 50%;
  border: solid 4px #ffffff;
  box-shadow: 0 0 0 6px #e0e2e5;
`;

const QuoteContainer = styled.div`
  display: flex;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  align-items: flex-end;
  text-align: left;
  padding: 27px 39px;
  font-family: "Proxima Nova - Semibold";
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  @media (max-width: 768px) {
    grid-row: 3 / 5;
    grid-column: 1 / 4;
    text-align: center;
    justify-content: center;
    align-items: flex-start;
    color: #3e495e;
    padding: 40px;
  }
`;

export const Jumbotron = () => {
  return (
    <JumbotronWrapper>
      <JumbotronCoverImage />
      <QuoteContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
        accusamus?
      </QuoteContainer>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
    </JumbotronWrapper>
  );
};
