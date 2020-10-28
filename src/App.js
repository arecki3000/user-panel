import React from "react";
import "./styles.css";
import { Nav, PageWrapper, Jumbotron, Content } from "./components/index";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <PageWrapper>
        <Jumbotron />
        <Content />
      </PageWrapper>
    </div>
  );
}
