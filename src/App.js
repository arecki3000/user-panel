import React from "react";
import "./styles.css";
import { Nav, PageWrapper, Jumbotron } from "./components/index";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <PageWrapper>
        <Jumbotron />
      </PageWrapper>
    </div>
  );
}
