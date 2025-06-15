import React from 'react';
import aboutImage from "./About CoffeeHub_prev_ui.png";
function About() {
  return (
    <div className="about-section" id="about">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title">About CoffeeHub</h1>
          <div className='about-hero-content'>
          <p className="hero-subtitle-about">
            Your trusted partner in delivering exceptional coffee experiences, one cup at a time
          </p>
          <img className="about-image" src={aboutImage} alt='The about side Image'/>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="section-title">Our Coffee Journey</h2>
              <p className="story-text">
                CoffeeHub was born from a simple passion: bringing the world's finest coffee directly to coffee lovers everywhere. What started as a small dream has grown into a platform that connects you with premium coffee from master roasters and local artisans.
              </p>
              <p className="story-text">
                We believe that great coffee should be accessible to everyone, whether you're starting your morning routine or taking an afternoon break. Every cup tells a story, and we're here to help you discover yours.
              </p>
              <div className="story-buttons">
                <button className="btn btn-primary">Explore Our Story</button>
                <button className="btn btn-secondary">Meet Our Team</button>
              </div>
            </div>
            <div className="story-image">
              <div className="story-card">
                <div className="story-icon">☕</div>
                <h3>Our Mission</h3>
                <p>To make exceptional coffee accessible through innovative technology and passionate service. We bring joy and energy to your daily routine, one perfect cup at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">☕</div>
              <div className="stat-number">50K+</div>
              <div className="stat-label">Cups Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">5K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚚</div>
              <div className="stat-number">25K+</div>
              <div className="stat-label">Orders Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">4.9</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;