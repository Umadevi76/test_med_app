// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import ServiceCard from './ServiceCard';
import consultation from '../assets/consultation.png';
import appointment from '../assets/appointment.png';
import selfCheckup from '../assets/self checkup.png';
import tips from '../assets/HealthTips.JPG';

const HomePage = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Instant Consultation',
      image: consultation,
      path: '/instant-consultation'
    },
    {
      title: 'Book an Appointment',
      image: appointment,
      path: '/book-appointment'
    },
    {
      title: 'Self Checkup',
      image: selfCheckup,
      path: '/self-checkup'
    },
    {
      title: 'Health Tips and Guidance',
      image: tips,
      path: '/health-tips'
    }
  ];

  return (
    <div className="service-container">
      <h2>Best Services</h2>
      <p>Take care of your body. It's the only place you have to live.</p>
      <div className="card-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            onClick={() => navigate(service.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
