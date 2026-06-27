import React from 'react';

export default function About({ data }) {
  const { bio, image } = data || {};

  return (
    <section id="about" className="section about-section">
      <div className="about-inner">
        <img
          className="profile-pic"
          src={`images/${image}`}
          alt="Hiren Mistry"
        />
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <ul className="bio-list">
            {bio?.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
