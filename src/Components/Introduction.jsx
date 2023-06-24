import React, { useEffect } from "react";
import Header from "./Header";

function Introduction() {

  return (
    <>
      <section className="introduction--wrapper">
        <Header />
        <div className="introduction-info-holder">
          <h1 className="intro--title">Hi There, I'm Pranav 👋</h1>
          <h3 className="intro--subtitle">I'm a highschooler with a <span className="tc">passion for web-development</span></h3>
          <div className="intro-button-holder">
            <button className="intro--button"><a href="#about">About Me</a></button>
            <button className="intro--button"><a href="#projects">My Work</a></button>
          </div>
        </div>
      </section>
    </>
  );
  
}

export default Introduction;
