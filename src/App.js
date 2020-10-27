import React from "react";
import "./styles.css";
import { Nav, PageWrapper, Jumbotron } from "./components/index";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <PageWrapper>
        <Jumbotron />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </PageWrapper>
    </div>
  );
}
