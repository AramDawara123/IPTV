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
            src="images/iptv-about-us.png"
            alt="A person enjoying IPTV streaming service on a tablet"
            className="about-image"
            width="600"
            height="400"
          />
        </div>

        <h2>Our Future</h2>
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
              <p>Launching our first streaming platform with 1000+ channels</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="content">
              <h3>2027</h3>
              <p>
                Expanding into international markets, getting more people on our site
              </p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="content">
              <h3>2028</h3>
              <p>Introducing AI-powered content recommendations</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="content">
              <h3>2030</h3>
              <p>Celebrating 1 million active users worldwide</p>
            </div>
          </div>
        </div>

        <div className="team-section">
      <h2>Our Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <h3>Aram Dawara</h3>
          <p>Front-End Developer</p>
          <img src="./images/aram-pf.jpeg" alt="Aram Dawara" />
          <div className="social-links">
            <a className="LinkedIn" href="https://www.linkedin.com/in/aram-dawara-528637202/" target="_blank" rel="noopener noreferrer">
              <img src="images/317725_linkedin_social_icon.png" alt="LinkedIn" />
            </a>
            <a className="GitHub" href="https://github.com/AramDawara123" target="_blank" rel="noopener noreferrer">
              <img src="images/211904_social_github_icon.png" alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="team-member">
          <h3>Akshay Dhondai</h3>
          <p>Front-End Developer</p>
          <img src="./images/akshay-pf.jpeg" alt="Akshay Dhondai" />
          <div className="social-links">
            <a className="LinkedIn" href="https://www.linkedin.com/in/akshay-dhondai/" target="_blank" rel="noopener noreferrer">
              <img src="images/317725_linkedin_social_icon.png" alt="LinkedIn" />
            </a>
            <a className="GitHub" href="https://github.com/Akshay12184" target="_blank" rel="noopener noreferrer">
              <img src="images/211904_social_github_icon.png" alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="team-member">
          <h3>Adil Harhour</h3>
          <p>Front-End Developer</p>
          <img src="./images/adil-pf.jpeg" alt="Adil Harhour" />
          <div className="social-links">
            <a className="LinkedIn" href="https://www.linkedin.com/in/adil-harhour-3386391b0/" target="_blank" rel="noopener noreferrer">
              <img src="images/317725_linkedin_social_icon.png" alt="LinkedIn" />
            </a>
            <a className="GitHub" href="https://github.com/Aharhour" target="_blank" rel="noopener noreferrer">
              <img src="images/211904_social_github_icon.png" alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="team-member">
          <h3>Jesse Bogaart</h3>
          <p>Back-End Developer</p>
          <img src="./images/jesse-pf.jpeg" alt="Jesse Bogaart" />
          <div className="social-links">
            <a className="LinkedIn" href="https://www.linkedin.com/in/jesse-bogaart/" target="_blank" rel="noopener noreferrer">
              <img src="images/317725_linkedin_social_icon.png" alt="LinkedIn" />
            </a>
            <a className="GitHub" href="https://github.com/frkyscience" target="_blank" rel="noopener noreferrer">
              <img src="images/211904_social_github_icon.png" alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="team-member">
          <h3>Ties Van Oldenborgh</h3>
          <p>Back-End Developer</p>
          <img src="./images/Ties-pf.png" alt="Ties Van Oldenborgh" />
          <div className="social-links">
            <a className="GitHub" href="https://github.com/Tiesvo" target="_blank" rel="noopener noreferrer">
              <img src="images/211904_social_github_icon.png" alt="GitHub" />
            </a>
          </div>
        </div>
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