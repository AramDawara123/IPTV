import React from "react";
import "../CSS/Home.css";

export const Home: React.FC = () => {
  return (
    <section className="feature">
        <div className="center-text">
          <h2>All-In-One Premium IPTV Service</h2>
        </div>

        <div className="feature-content" data-aos="zoom-in">
          <div className="box">
            <div className="f-icon">
              <i className="ri-bank-card-fill"></i>
            </div>

            <div className="f-text">
              <p>Enjoy your time with excellent image quality, on any device, anytime and enywhere</p>
              <p>with over +18.000 channels, +88.000 VOD and uptime 100%</p>
            </div>
          </div>
        </div>
      </section>
  );
};