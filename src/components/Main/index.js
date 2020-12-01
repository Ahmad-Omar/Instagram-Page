import React from "react";
import "./style.css";
import Header from "./Header";
import Stories from "./Stories";
import Posts from "./Posts";

function Main() {
  return (
    <div className="main">
      <Header />
      <Stories />
      <Posts />
    </div>
  );
}

export default Main;
