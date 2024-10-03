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
              <h3>2024</h3>
              <p>Founded with a vision to revolutionize digital entertainment</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="content">
              <h3>2025</h3>
              <p>Launched our first streaming platform with 1000+ channels</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="content">
              <h3>2027</h3>
              <p>
                Expanded to international markets, getting more people on our site
              </p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="content">
              <h3>2028</h3>
              <p>Introduced AI-powered content recommendations</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="content">
              <h3>2030</h3>
              <p>Celebrating 1 million active users worldwide</p>
            </div>
          </div>
        </div>

        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Aram Dawara</h3>
            <p>Front-End Developer</p>
            <a href="https://www.linkedin.com/in/aram-dawara-528637202/"><img src="images/317725_linkedin_social_icon.png" alt="" /></a>
            <a href="https://github.com/AramDawara123"><img src="images/211904_social_github_icon.png" alt="" /></a>
          </div>
          <div className="team-member">
            <h3>Akshay Dhondai</h3>
            <p>Front-End Developer</p>
            <a href="https://www.linkedin.com/in/akshay-dhondai/"><img src="images/317725_linkedin_social_icon.png" alt="" /></a>
            <a href="https://github.com/Akshay12184"><img src="images/211904_social_github_icon.png" alt="" /></a>
          </div>
          <div className="team-member">
            <h3>Adil Harhour</h3>
            <p>Front-End Developer</p>
            <a href="https://www.linkedin.com/in/adil-harhour-3386391b0/ "><img src="images/317725_linkedin_social_icon.png" alt="" /></a>
            <a href="https://github.com/Aharhour"><img src="images/211904_social_github_icon.png" alt="" /></a>
          </div>
          <div className="team-member">
            <h3>Jesse Bogaart</h3>
            <p>Back-End Developer</p>
            <a href="https://www.linkedin.com/in/jesse-bogaart/ "><img src="images/317725_linkedin_social_icon.png" alt="" /></a>
            <a href="https://github.com/frkyscience"><img src="images/211904_social_github_icon.png" alt="" /></a>
          </div>
          <div className="team-member">
            <h3>Ties Van Oldenborgh</h3>
            <p>Back-End Developer</p>
            <a href="https://github.com/Tiesvo"><img src="images/211904_social_github_icon.png" alt="" /></a>
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