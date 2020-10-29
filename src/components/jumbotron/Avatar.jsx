import React from "react";
import styled from "styled-components";
import Row from "../../grid/Row";

const AvatarContainer = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 151px;
  height: 151px;
  grid-row: 2 / 4;
  background: #ffffff;
  border-radius: 50%;
  margin: 0 auto;
`;

const AvatarImage = styled.div`
  width: 123px;
  height: 123px;
  background: #3e495e;
  border-radius: 50%;
  border: solid 4px #ffffff;
  box-shadow: 0 0 0 6px #e0e2e5;
`;

const Avatar = () => {
  return (
    <AvatarContainer>
      <AvatarImage />
    </AvatarContainer>
  );
};

export default Avatar;
