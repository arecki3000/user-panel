import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  max-width: 1327px;
  margin: 32px auto;
`;

export const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
