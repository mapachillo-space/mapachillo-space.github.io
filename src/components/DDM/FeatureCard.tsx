import React from 'react';
import './FeatureCard.css';

interface FeatureCardProps {
  title: string;
  body: string;
  img: string;
  cardColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  body,
  img,
  cardColor = '#ffeef6',
}) => {
  return (
    <div className="feature-card" style={{ backgroundColor: cardColor }}>
      <div className="card-border">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        <div className="card-image-container">
          <img src={img} alt={title} className="card-image" />
        </div>
        <div className="card-body">{body}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
