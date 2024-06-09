import React from 'react';
import Form from './Form';

export default function About() {
  const cards = [
    { image: '/img/tag.png', text: 'WebDev', description: 'Advance and complete course just $50 only' },
    { image: '/img/react.png', text: 'Pro MERN', description: 'Advance and complete course just $50 only' },
    { image: '/img/devop.jpg', text: 'DevOOP Mastery', description: 'Advance and complete course just $50 only' },
    { image: '/img/java.png', text: 'Pro Java Dev', description: 'Advance and complete course just $50 only' },
    { image: '/img/docker.png', text: 'Docker', description: 'Advance and complete course just $50 only' },
    { image: '/img/jenkins.png', text: 'Jenkins', description: 'Advance and complete course just $50 only' },
    { image: '/img/git.png', text: 'Git/GitHub', description: 'Advance and complete course just $50 only' },
    { image: '/img/aws.png', text: 'AWS Pro', description: 'Advance and complete course just $50 only' },
  ];

  const handleCardClick = (text) => {
    const url = `https://wa.me/+923218517228?text=${encodeURIComponent(text)}`;
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  };

  return (
    <div className="card-con">
      {cards.map((card, index) => (
        <div
          className="card-item"
          key={index}
          onClick={() => handleCardClick(card.text)}
        >
          <img src={card.image} alt={card.text} className="card-image" />
          <h1>{card.text}</h1>
          <p>{card.description}</p>
          <img
            src="/img/whatsapp.png"
            alt="WhatsApp-Icon"
            className="whatsapp-icon"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(card.text);
            }}
          />
        </div>
      ))}
      <Form />
    </div>
  );
}
