import React from "react";
import "./styles.css";
import Grid from "./grid/Grid";
import { Nav } from "./components/index";
import Jumbotron from "./components/jumbotron/Jumbotron";
import CoverImage from "./components/jumbotron/CoverImage";
import Avatar from "./components/jumbotron/Avatar";
import UserName from "./components/jumbotron/UserName";
import Quote from "./components/jumbotron/Quote";
import Tokens from "./components/jumbotron/Tokens";
import Buttons from "./components/jumbotron/Buttons";
import Verified from "./imgs/Verified.svg";
import FacebookToken from "./imgs/Facebook_Token.svg";
import EmptyToken from "./imgs/Empty_Token.svg";
import MsgButton from "./imgs/MsgButton.svg";
import SpcButton from "./imgs/SpcButton.svg";

export default function App() {
  return (
    <Grid gm="32px 0" style={{ background: "#ffffff" }}>
      <Nav />
      <Jumbotron gd="0 32px" gm="0 1rem" gs="0 1rem">
        <CoverImage />
        <Avatar />
        <UserName>
          <h1 className="name">
            Imię Nazwisko
            <img src={Verified} alt="sda" />
          </h1>
          <h3 className="city">San Francisco, CA</h3>
        </UserName>
        <Quote sd={1} ed={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          accusamus?
        </Quote>
        <Tokens sd={1} ed={2} sm={1} em={2}>
          <img src={FacebookToken} alt="token" />
          <img src={EmptyToken} alt="token" />
        </Tokens>
        <Buttons sd={8} ed={5}>
          <img src={SpcButton} alt="SpcButton" />
          <img src={MsgButton} alt="MsgButton" />
        </Buttons>
      </Jumbotron>
    </Grid>
  );
}
