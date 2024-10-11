import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "../src/pages/App";
import FAQ from "./pages/FAQ";
import "./CSS/Home.css";

// Interface om het prijspakket te beschrijven
interface Plan {
  duration: string;
  price: string;
  popular?: boolean;
  features: string[];
}

// Array van prijspakketten met details
const plans: Plan[] = [
  {
    duration: "1 Month",
    price: "$8.99",
    popular: false,
    features: [
      "12 Hours Free Trial",
      "HD IPTV",
      "+5,000 Channels",
      "+25,000 VOD",
      "7 days money back guarantee",
    ],
  },
  {
    duration: "1 Year",
    price: "$89.99",
    popular: true,
    features: [
      "24 Hours Free Trial",
      "HD/4K IPTV",
      "+10,000 Channels",
      "+50,000 VOD",
      "14 days money back guarantee",
    ],
  },
  {
    duration: "2 Years",
    price: "$159.99",
    popular: false,
    features: [
      "48 Hours Free Trial",
      "HD/4K/8K IPTV",
      "+18,000 Channels",
      "+100,000 VOD",
      "30 days money back guarantee",
    ],
  },
];

// Component om een prijspakket weer te geven
interface PlanProps {
  plan: Plan;
  index: number;
}

const PlanComponent: React.FC<PlanProps> = ({ plan, index }) => (
  <div className={`plan ${plan.popular ? "popular" : ""}`} key={index}>
    <h3>{plan.duration}</h3>
    <div className="plan-price">{plan.price}</div>
    <ul>
      {plan.features.map((feature, featureIndex) => (
        <li key={featureIndex}>✓ {feature}</li>
      ))}
    </ul>
    <button className="btn-2">Buy Now</button>
    <img className="bottom-logo" src="/images/devices-1.webp" alt="Devices" />
  </div>
);

// Hoofdcomponent van de homepage
const Home: React.FC = () => {
  return (
    <div className="container">
      {/* Hero-sectie */}
      <section className="hero">
        <h1 className="All-In-One">All-In-One Premium IPTV Service</h1>
        <p>
          Enjoy your time with excellent image quality up to 4K, on any device,
          anytime and anywhere,
          <br />
          with over +18,000 channels, +88,000 VOD and uptime 100%
        </p>
        <a href="https://wa.me/qr/2WXRBEQMIZKEB1" className="free-trial-btn">
          Free Trial
        </a>
        <div className="devices">
          <img src="/images/devices-4.png" alt="Devices" />
        </div>
      </section>

      {/* Kenmerken-sectie */}
      <div className="features">
        {[
          {
            img: "/images/earth_asia.png",
            title: "Channels from 115 countries worldwide",
            text: "You can watch TV channels from around the world (Netherlands / Belgium / Germany / UK / Spain / Portugal / Poland / Italy / India / Dubai / Turkey / China ...)",
          },
          {
            img: "/images/moneybag.png",
            title: "7 days money back guarantee",
            text: "Within 7 days of your purchase you have the option to cancel our IPTV subscription if you are not satisfied. Then you will receive a full refund from us.",
          },
          {
            img: "/images/star-struck.png",
            title: "High Quality HD/FHD/4K/8K",
            text: "We offer all image qualities to view our IPTV service everywhere, regardless of your network speed on: Mobile / TV / Android box / PC ...",
          },
        ].map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.img} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Logo's van partners */}
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
          "images/brand_item23.webp",
        ].map((src, index) => (
          <div key={index} className={`itemRight item${index + 1}`}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      {/* Prijsplan-sectie */}
      <section className="pricing">
        <h1>Choose your plan</h1>
        <div className="pricing-plans">
          {plans.map((plan, index) => (
            <PlanComponent key={index} plan={plan} index={index} />
          ))}
        </div>
      </section>

      {/* Hoe het werkt-sectie */}
      <div className="how-container">
        <h1 className="work">How does it work?</h1>
        <div className="step-one">
          {[
            {
              number: "1",
              title: "Place your order",
              text: "Place your order by choosing your preferred subscription period: 1, 12 or 24 months.",
              icon: "🛍️",
            },
            {
              number: "2",
              title: "Get your account",
              text: "This process can take 3 to 5 minutes. Please check your inbox and your spam folder in this process.",
              icon: "👤",
            },
            {
              number: "3",
              title: "Enjoy your IPTV service!",
              text: "Enjoy all channels, films and series now!",
              icon: "📺",
            },
          ].map((step, index) => (
            <div className="step" key={index}>
              <div className="icon">{step.icon}</div>
              <h2>{`${step.number}. ${step.title}`}</h2>
              <p>{step.text}</p>
              {step.number === "3" && (
                <button className="free-trial">Free Trial</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ-sectie */}
      <div className="faq-container">
        <FAQ />
      </div>

      {/* Ondersteuningssectie met WhatsApp link */}
      <div className="whatsapp-support-1">
        <a href="https://wa.me/qr/2WXRBEQMIZKEB1" target="_blank" rel="nofollow">
          <span className="whatsapp-button"></span>
        </a>
      </div>

      {/* Ondersteuningssectie met een WhatsApp-knop */}
      <div className="support">
        <div className="support-text">
          <svg className="support-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="40" height="40">
            <path fill="#25D366" d="M380.9 97.1C339 55.1..." />
          </svg>
          <span>If you still have a question, we can help you!</span>
        </div>
        <button className="whatsapp-button-1">
          <a href="#">WhatsApp us</a>
        </button>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; all rights reserved 2024</p>
      </footer>
    </div>
  );
};

// Render de React component met ReactDOM en BrowserRouter
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

export default Home;