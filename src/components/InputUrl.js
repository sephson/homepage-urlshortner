import React from "react";
// import Button from "./Button";
import "./InputUrl.css";

function InputUrl() {
  return (
    <div className="bgc-grey">
      <section className="inputurl">
        <div className="input-field bg-desk">
          <input
            className="input"
            placeholder="shorten your links..."
            type="text"
          />
          <button className="shorten-btn">Shorten it</button>
        </div>
        <ul className="shorten-list">
          <li className="shorten-item">
            <p className="full-link">
              https://www.w3schools.com/css/css3_flexbox.asp
            </p>
            <p className="shortened-link">https://rel.ink/4kyliq</p>
            <button className="copy">Copy</button>
          </li>

          {/* <li className="shorten-item">
            <p className="full-link">
              https://tanalin.com/en/articles/css-block-order/
            </p>
            <p className="shortened-link">https://rel.ink/4kyliq</p>
            <button className="copy">Copy</button>
          </li> */}
        </ul>
      </section>
    </div>
  );
}

export default InputUrl;
