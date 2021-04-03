import React from "react";
import "./AdvancedStats.css";
import iconbrand from "./images/icon-brand-recognition.svg";
import icondetail from "./images/icon-detailed-records.svg";
import fullycustom from "./images/icon-detailed-records.svg";

function AdvancedStats() {
  return (
    <section className="ad-stats">
      <h2 className="adstats-header">Advanced Statistics</h2>
      <p className="adstats-para">
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>

      <div className="adstats-features">
        <div className="wrap">
          <img
            className="image-item"
            alt="icon-brand-recognition"
            src={iconbrand}
          />
          <div className="adstats-item">
            <h3>Brand Recognition</h3>
            <p className="adstats-text">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content
            </p>
          </div>
        </div>
        <div className="wrap">
          <img
            className="image-item"
            alt="icon-detailed-records"
            src={icondetail}
          />
          <div className="adstats-item">
            <h3>Detailed Records</h3>
            <p className="adstats-text">
              Gain insights into who is clicking your links. knowing when and
              where people engage with your contents helps inform better
              decisions
            </p>
          </div>
        </div>

        <div className="wrap">
          <img
            className="image-item"
            alt="icon-fullycustom"
            src={fullycustom}
          />
          <div className="adstats-item">
            <h3>Fully Customisable</h3>
            <p className="adstats-text">
              Gain insights into who is clicking your links. knowing when and
              where people engage with your contents helps inform better
              decisions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvancedStats;
