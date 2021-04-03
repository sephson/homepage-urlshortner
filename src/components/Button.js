import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--cyan", "btn--darkBlue", "btn--getstarted", "space"];
const SIZES = [
  "btn-small-round",
  "btn-medium-round",
  "btn-small-sq",
  "btn-medium-sq",
  "btn-mobile-large-sq",
  "btn-mobile-medium-round",
];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/Sign Up">
      <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
