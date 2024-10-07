import React from "react";
import "../CSS/About.css";

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  linkedInUrl?: string;
  githubUrl: string;
}

const teamMembers: { frontEnd: TeamMember[]; backEnd: TeamMember[] } = {
  frontEnd: [
    {
      name: 'Aram Dawara',
      role: 'Front-End Developer',
      imageSrc: './images/aram-pf.jpeg',
      linkedInUrl: 'https://www.linkedin.com/in/aram-dawara-528637202/',
      githubUrl: 'https://github.com/AramDawara123',
    },
    {
      name: 'Akshay Dhondai',
      role: 'Front-End Developer',
      imageSrc: './images/akshay-pf.jpeg',
      linkedInUrl: 'https://www.linkedin.com/in/akshay-dhondai/',
      githubUrl: 'https://github.com/Akshay12184',
    },
    {
      name: 'Adil Harhour',
      role: 'Front-End Developer',
      imageSrc: './images/adil-pf.jpeg',
      linkedInUrl: 'https://www.linkedin.com/in/adil-harhour-3386391b0/',
      githubUrl: 'https://github.com/Aharhour',
    },
  ],
  backEnd: [
    {
      name: 'Jesse Bogaart',
      role: 'Back-End Developer',
      imageSrc: './images/jesse-pf.jpeg',
      linkedInUrl: 'https://www.linkedin.com/in/jesse-bogaart/',
      githubUrl: 'https://github.com/frkyscience',
    },
    {
      name: 'Ties Van Oldenborgh',
      role: 'Back-End Developer',
      imageSrc: './images/Ties-pf.png',
      githubUrl: 'https://github.com/Tiesvo',
    },
  ],
};

const AboutUs: React.FC = () => {
  const renderTeamMembers = (members: TeamMember[]) =>
    members.map(({ name, role, imageSrc, linkedInUrl, githubUrl }) => (
      <div key={name} className="team-member">
        <h3>{name}</h3>
        <p>{role}</p>
        <img src={imageSrc} alt={`${name}, ${role}`} />
        <div className="social-links">
          {linkedInUrl && (
            <a
              className="LinkedIn"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/317725_linkedin_social_icon.png"
                alt={`${name}'s LinkedIn`}
              />
            </a>
          )}
          <a
            className="GitHub"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/211904_social_github_icon.png"
              alt={`${name}'s GitHub`}
            />
          </a>
        </div>
      </div>
    ));

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
          <h1>Our Wonderful Team</h1>

          <h2>Front-End Developers:</h2>
          <div className="team-grid">
            {renderTeamMembers(teamMembers.frontEnd)}
          </div>

          <h2>Back-End Developers:</h2>
          <div className="team-grid">
            {renderTeamMembers(teamMembers.backEnd)}
          </div>
        </div>

        <h2>Our Commitment</h2>
        <p>At IPTV Streaming Service, we're committed to:</p>
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
