import React from "react";
import Header from "./Header";

function Introduction() {
  return (
    <>
      <section className="introduction--wrapper">
        <Header />
        <div className="alert-message">
          New portfolio available! Click <a href="NEW_PORTFOLIO_URL">here</a> to check it out.
        </div>
        <div className="introduction-info-holder">
          <h1 className="intro--title">Hi There, I'm Pranav 👋</h1>
          <h3 className="intro--subtitle">This portfolio is <span className="tc">no longer in development.</span> <br /> Check out my new one down below.</h3>
          <div className="intro-button-holder">
            <button className="intro--button"><a href="https://pranavk.vercel.app" target="_blank">Checkout the NEW portfolio</a></button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction;
