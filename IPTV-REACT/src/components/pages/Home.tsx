import React from "react";
import "../CSS/Home.css";

interface BrandItemProps {
  src: string;
  alt: string;
  className: string;
}

const BrandItem: React.FC<BrandItemProps> = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

const BrandItems: React.FC = () => {
  const leftItems = [
    { src: 'images/brand_item05-150x46-1-1.webp', alt: 'Brand 1', className: 'itemLeft item1' },
    { src: 'images/brand_item06-150x46-1-1.webp', alt: 'Brand 2', className: 'itemLeft item2' },
    { src: 'images/brand_item08-150x46-1-1.webp', alt: 'Brand 3', className: 'itemLeft item3' },
    { src: 'images/brand_item09-150x46-1-1.webp', alt: 'Brand 4', className: 'itemLeft item4' },
    { src: 'images/brand_item10-150x46-1-1.webp', alt: 'Brand 5', className: 'itemLeft item5' },
    { src: 'images/brand_item11-1.webp', alt: 'Brand 6', className: 'itemLeft item6' },
    { src: 'images/brand_item12-1.webp', alt: 'Brand 7', className: 'itemLeft item7' },
    { src: 'images/brand_item13-150x46-1-1.webp', alt: 'Brand 8', className: 'itemLeft item8' },
  ];

  const rightItems = [
    { src: 'images/brand_item14-150x46-1-1.webp', alt: 'Brand 9', className: 'itemRight item1' },
    { src: 'images/brand_item15-150x46-1-1.webp', alt: 'Brand 10', className: 'itemRight item2' },
    { src: 'images/brand_item16-150x46-1-1.webp', alt: 'Brand 11', className: 'itemRight item3' },
    { src: 'images/brand_item17-150x46-1-1.webp', alt: 'Brand 12', className: 'itemRight item4' },
    { src: 'images/brand_item18-150x46-1-1.webp', alt: 'Brand 13', className: 'itemRight item5' },
    { src: 'images/brand_item21-150x46-1-1.webp', alt: 'Brand 14', className: 'itemRight item6' },
    { src: 'images/brand_item22-150x46-1-1.webp', alt: 'Brand 15', className: 'itemRight item7' },
    { src: 'images/brand_item15-150x46-1-1.webp', alt: 'Brand 16', className: 'itemRight item8' },
  ];

  return (
    <div>
      <div className="wrapper">
        {leftItems.map((item, index) => (
          <BrandItem key={index} src={item.src} alt={item.alt} className={item.className} />
        ))}
      </div>
      <div className="wrapper">
        {rightItems.map((item, index) => (
          <BrandItem key={index} src={item.src} alt={item.alt} className={item.className} />
        ))}
      </div>
    </div>
  );
};

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
            <p>Enjoy your time with excellent image quality, on any device, anytime and anywhere</p>
            <p>with over +18.000 channels, +88.000 VOD and uptime 100%</p>
          </div>
        </div>
      </div>

      <section className="brand-section">
        <BrandItems />

        
      </section>
    </section>
  );
};
