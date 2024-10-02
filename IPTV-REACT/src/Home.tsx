import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "../src/pages/App";
import "./CSS/Home.css";
import FAQ from "./pages/FAQ";

const Home: React.FC = () => {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="All-In-One">All-In-One Premium IPTV Service</h1>
        <p>
          Enjoy your time with excellent image quality up to 4K, on any device,
          anytime and anywhere,<br />
          with over +18,000 channels, +88,000 VOD and uptime 100%
        </p>
        <a href="https://wa.me/qr/2WXRBEQMIZKEB1" className="free-trial-btn">
          Free Trial
        </a>
        <div className="devices">
          <img src="/images/devices-4.png" alt="Devices" />
        </div>
        <div className="color-overlay"></div>
      </section>

      <div className="features">
        {[
          {
            img: "/images/earth_asia.png",
            title: "Channels from 115 countries worldwide",
            text: "You can watch TV channels from around the world (Netherlands / Belgium / Germany / UK / Spain / Portugal / Poland / Italy/ Hindi / Arabic / Turkey...)"
          },
          {
            img: "/images/moneybag.png",
            title: "7 days money back guarantee",
            text: "Within 7 days of your purchase you have the option to cancel our IPTV subscription if you are not satisfied. Then you will receive a full refund from us."
          },
          {
            img: "/images/star-struck.png",
            title: "High Quality HD/FHD/4K/8K",
            text: "We offer all image qualities to view our IPTV service everywhere, regardless of your network speed on: Mobile / TV / Android box / PC ..."
          }
        ].map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.img} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="wrapper">
        {[
          "images/brand_item05-150x46-1-1.webp",
          "images/brand_item06-150x46-1-1.webp",
          "images/brand_item08-150x46-1-1.webp",
          "images/brand_item09-150x46-1-1.webp",
          "images/brand_item10-150x46-1-1.webp",
          "images/brand_item11-1.webp",
          "images/brand_item12-1.webp",
          "images/brand_item13-150x46-1-1.webp",
        ].map((src, index) => (
          <div key={index} className={`itemLeft item${index + 1}`}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <div className="wrapper">
        {[
          "images/brand_item14-150x46-1-1.webp",
          "images/brand_item15-150x46-1-1.webp",
          "images/brand_item16-150x46-1-1.webp",
          "images/brand_item17-150x46-1-1.webp",
          "images/brand_item18-150x46-1-1.webp",
          "images/brand_item21-150x46-1-1.webp",
          "images/brand_item22-150x46-1-1.webp",
          "images/brand_item15-150x46-1-1.webp",
        ].map((src, index) => (
          <div key={index} className={`itemRight item${index + 1}`}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <section className="pricing">
        <h1>Choose your plan</h1>
        <div className="pricing-plans">
          {[
            { duration: "2 Years", price: "€69.95" },
            { duration: "1 Year", price: "€39.95", popular: true },
            { duration: "6 Months", price: "€30.95" },
          ].map((plan, index) => (
            <div className={`plan ${plan.popular ? "popular" : ""}`} key={index}>
              <h3>{plan.duration}</h3>
              <div className="plan-price">{plan.price}</div>
              <ul>
                <li>✓ 24 Hours Free Trial</li>
                <li>✓ HD/4K/8K IPTV</li>
                <li>✓ +18,000 Channels</li>
                <li>✓ +100,000 VOD</li>
                <li>✓ Watch Channels</li>
                <li>✓ 7 days money back guarantee</li>
              </ul>
              <button className="btn-2">Buy Now</button>
              <p>Ready within 5 to 7 min</p>
              <img src="/images/devices-1.webp" alt="Devices" />
            </div>
          ))}
        </div>
      </section>

      <div className="how-container">
        <h1 className="work">How does it work?</h1>
        <div className="step-one">
          {[
            {
              number: "1",
              title: "Place your order",
              text: "Place your order by choosing your preferred subscription period : 6, 12 or 24 months.",
              icon: "🛍️"
            },
            {
              number: "2",
              title: "Get your account",
              text: "This process can take 15 to 30 minutes. Please check your inbox and your spam folder. To speed up the process, please contact us via Whatsapp.",
              icon: "👤"
            },
            {
              number: "3",
              title: "Enjoy your IPTV service!",
              text: "Enjoy all channels, films and series now!",
              icon: "📺"
            }
          ].map((step, index) => (
            <div className="step" key={index}>
              <div className="icon">{step.icon}</div>
              <h2>{`${step.number}. ${step.title}`}</h2>
              <p>{step.text}</p>
              {step.number === "3" && <button className="free-trial">Free Trial</button>}
            </div>
          ))}
        </div>
      </div>

      <div className="faq-container">
      <FAQ />
      </div>

      <div className="whatsapp-support-1">
        <a href="https://wa.me/qr/2WXRBEQMIZKEB1" target="_blank" rel="nofollow">
          <span className="whatsapp-button"></span>
        </a>
      </div>

      <div className="support">
        <div className="support-text">
          <svg className="support-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#fff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224-99.6 224-222 0-59.3-23-115.6-60.9-157.9z" />
          </svg>
          <p>Contact us for support</p>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

export default Home;