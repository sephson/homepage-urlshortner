import React from "react";
import "./Hero.css";
import Button from "./Button";
import Heroimage from "./images/illustration-working.svg";

function Hero() {
  return (
    <section className="hero container">
      <div className="left-side">
        <h1 className="hero-header">More than just shorter links</h1>
        <p className="hero-text">
          Build your brand recognition and get detailed insights on how your
          links are performing
        </p>
        <Button buttonSize={`btn-medium-round`} buttonStyle={`btn--getstarted`}>
          Get Started
        </Button>
      </div>
      <div className="right-side">
        <img className="hero-illustration" src={Heroimage} alt="hero" />
      </div>
    </section>
  );
}

export default Hero;
