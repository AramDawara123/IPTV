import React from "react";
import "../CSS/About.css";

const AboutUs: React.FC = () => {
  return (
    <>
      <main className="about-container">
        <h1>About IPTV Streaming Service</h1>

        <div className="about-grid">
          <div>
            <p>
              Welcome to IPTV Streaming Service, your premier destination for
              high-quality, on-demand entertainment. Since our inception, we've
              been dedicated to revolutionizing the way people consume media,
              bringing you an extensive library of content right at your
              fingertips.
            </p>
            <p>
              Our mission is to provide a seamless, user-friendly streaming
              experience that caters to diverse tastes and preferences. We
              believe in the power of technology to connect people with the
              content they love, anytime and anywhere.
            </p>
          </div>
          <img
            src="https://example.com/images/streaming-service.jpg"
            alt="A person enjoying IPTV streaming service on a tablet"
            className="about-image"
            width="600"
            height="400"
          />
        </div>

        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="content">
              <h3>2015</h3>
              <p>Founded with a vision to revolutionize digital entertainment</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="content">
              <h3>2017</h3>
              <p>Launched our first streaming platform with 1000+ channels</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="content">
              <h3>2019</h3>
              <p>
                Expanded to international markets, reaching 1 million
                subscribers
              </p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="content">
              <h3>2021</h3>
              <p>Introduced AI-powered content recommendations</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="content">
              <h3>2023</h3>
              <p>Celebrating 5 million active users worldwide</p>
            </div>
          </div>
        </div>

        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Aram Dawara</h3>
            <p>Front-End Developer</p>
          </div>
          <div className="team-member">
            <h3>Akshay Dhondai</h3>
            <p>Front-End Developer</p>
          </div>
          <div className="team-member">
            <h3>Adil Harhour</h3>
            <p>Front-End Developer</p>
          </div>
          <div className="team-member">
            <h3>Jesse Bogaart</h3>
            <p>Back-End Developer</p>
          </div>
          <div className="team-member">
            <h3>Ties Van Oldenborgh</h3>
            <p>Back-End Developer</p>
          </div>
        </div>

        <h2>Our Commitment</h2>
        <p>
          At IPTV Streaming Service, we're committed to:
        </p>
        <ul>
          <li>Providing high-quality, diverse content</li>
          <li>Ensuring a seamless streaming experience</li>
          <li>Constantly innovating and improving our services</li>
          <li>Respecting user privacy and data security</li>
          <li>Offering excellent customer support</li>
        </ul>
        <p>
          We're excited to continue growing and evolving with you, our valued
          customers. Thank you for being a part of our journey!
        </p>
      </main>

      <footer>
        <p>&copy; 2023 IPTV Streaming Service. All rights reserved.</p>
      </footer>
    </>
  );
};

export default AboutUs;