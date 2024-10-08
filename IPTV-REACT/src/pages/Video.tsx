import React from 'react';
import "../CSS/Video.css";

const TrailerComponent: React.FC = () => {
  return (
    <div className="trailer-container">
      <h1>Watch the Official Trailer</h1>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/KnrRy6kSFF0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerComponent;
