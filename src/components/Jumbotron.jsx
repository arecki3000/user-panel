import React from "react";
import styled from "styled-components";
import FacebookToken from "../imgs/Facebook_Token.svg";
import EmptyToken from "../imgs/Empty_Token.svg";
import Verified from "../imgs/Verified.svg";
import MsgButton from "../imgs/MsgButton.svg";
import SpcButton from "../imgs/SpcButton.svg";

const JumbotronWrapper = styled.div`
  display: grid;
  grid-template-rows: 224px 118px 33px 108px;
  grid-template-columns: 1fr 151px 1fr;
  width: 100%;
  min-height: 478px;
  background-color: #ffffff;
  box-shadow: 0 0 40px rgba(49, 92, 173, 0.12);
  border-radius: 25px;
  margin-bottom: 32px;
  @media (max-width: 1030px) {
    grid-template-rows: 184px 118px 33px 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-rows: 184px 118px 33px 1fr 1fr 16px;
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
  padding: 27px 36px;
  font-family: "Proxima Nova - Semibold";
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  @media (max-width: 1030px) {
    grid-row: 4 / 5;
    grid-column: 1 / 4;
    text-align: center;
    padding: 0;
    justify-content: center;
    align-items: flex-end;
    color: #3e495e;
  }
  @media (max-width: 768px) {
    grid-row: 4 / 6;
    align-items: center;
`;

const UserName = styled.div`
  grid-row: 3 / 5;
  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .name {
    color: #3e495e;
    font-size: 27px;
    padding-bottom: 10px;
    font-family: "Proxima Nova - Semibold";
    display: flex;
    align-items: center;
    img {
      margin-left: 6px;
      display: inline-block;
      width: 20px;
      height: 20px;
    }
  }
  .city {
    color: #929cae;
    font-size: 16px;
    font-family: "Poppins-Regular";
    line-height: 22px;
  }
  @media (max-width: 1030px) {
    padding: 10px;
    grid-row: 4 / 5;
  }
`;

const Tokens = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-row: 3 / 5;
  grid-column: 1 / 2;
  padding-left: 36px;
  img {
    width: 41px;
    height: 41px;
    padding-right: 19px;
  }
  @media (max-width: 1030px) {
    grid-row: 5 / 6;
    grid-column: 1 / 4;
    img {
      width: 25px;
      height: 25px;
      padding-right: 19px;
    }
  }
  @media (max-width: 500px) {
    grid-row: 5 / 6;
    justify-content: center;
    align-items: flex-end;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-row: 3 / 5;
  grid-column: 3 / 4;
  padding: 36px;
  img {
    height: 59px;
    padding-left: 21px;
  }
  @media (max-width: 1199px) {
    img {
      height: 45px;
      padding-left: 19px;
    }
  }
  @media (max-width: 1030px) {
    grid-row: 5 / 6;
    grid-column: 1 / 4;
    img {
      width: 120px;
      height: 36px;
      padding-left: 19px;
    }
  }
  @media (max-width: 500px) {
    grid-row: 5 / 6;
    justify-content: space-between;
    img {
      padding: 0;
    }
  }
`;

export const Jumbotron = () => {
  return (
    <JumbotronWrapper>
      <JumbotronCoverImage />

      <AvatarContainer>
        <Avatar />
      </AvatarContainer>

      <Tokens>
        <img src={FacebookToken} alt="token" />
        <img src={EmptyToken} alt="token" />
        <img src={EmptyToken} alt="token" />
        <img src={EmptyToken} alt="token" />
      </Tokens>
      <UserName>
        <div className="name">
          Imię Nazwisko
          <img src={Verified} alt="" />
        </div>

        <div className="city">San Francisko, CA</div>
      </UserName>
      <QuoteContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
        accusamus?
      </QuoteContainer>
      <Buttons>
        <img src={SpcButton} alt="SpcButton" />
        <img src={MsgButton} alt="MsgButton" />
      </Buttons>
    </JumbotronWrapper>
  );
};
