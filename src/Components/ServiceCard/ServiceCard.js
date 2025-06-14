import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <img src={image} alt={title} className="service-image" />
      <h3 className="service-title">{title}</h3>
    </div>
  );
};

export default ServiceCard;
