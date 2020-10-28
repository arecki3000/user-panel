import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 376px 1fr;
  grid-template-columns: 384px 1fr;
  grid-column-gap: 26px;
`;

const ContentAbout = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  height: 100%;
  width: 100%;
  background: #ffffff;
  border-radius: 25px;
  @media (max-width: 1030px) {
    grid-column: 1 / 4;
  }
`;

export const Content = () => {
  return (
    <ContentWrapper>
      <ContentAbout>ABOUT</ContentAbout>
    </ContentWrapper>
  );
};
