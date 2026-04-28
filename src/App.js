import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Reveal elements on scroll
      const elements = document.querySelectorAll('.fade-in-on-scroll');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset;
        if (elementTop < window.innerHeight * 0.8) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    // Initial animations
    setTimeout(() => {
      setIsVisible({ hero: true, about: true, services: true, modernLife: true, clarityCall: true, footer: true });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ '--scroll-progress': `${scrollProgress}%` }}></div>
      
      {/* Navigation Bar */}
      <nav className={`navbar ${isVisible.hero ? 'visible' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <span className="logo-orange">÷</span>
            <span className="logo-grey">joyżen</span>
          </div>
          
          {/* Navigation Links */}
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#who" className="nav-link">Who It's For</a>
            <a href="#products" className="nav-link">Products</a>
          </div>
          
          {/* CTA Button */}
          <button className="cta-button">
            <span className="cta-icon">⭕</span>
            Book Clarity Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`hero ${isVisible.hero ? 'fade-in-on-scroll' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">A New Health System</h1>
          <p className="hero-subtitle">
            Joyzen is not a clinic. It's a new way of delivering reproductive healthcare.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className={`about-section ${isVisible.about ? 'fade-in-on-scroll' : ''}`}>
        <div className="about-content">
          <p className="about-text">
            <span className="about-joyzen">Joyzen</span> replaces fragmented care with a continuous system
            where hormones, fertility, and long-term health are managed
            together. Online or in clinic, it's the same person guiding your
            care. Tracking your progress. Adjusting your treatment.
          </p>
          <p className="about-text faded-text">
            Moving you forward. Joyzen connects you to the right doctor
            and keeps your care continuous across every step. Always
            accessible speak to your doctor anytime not just during
            appointment.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={`services-section ${isVisible.services ? 'fade-in-on-scroll' : ''}`}>
        <div className="services-container">
          <div className="services-logo">
            <span className="logo-orange">÷</span>
            <span className="logo-grey">joyżen</span>
          </div>
          
          <div className="services-grid">
            {/* Top Row */}
            <div className="service-card">
              <h3 className="service-title">Beyond Visits</h3>
              <p className="service-description">
                Traditional care treats moments. Joyzen manages the entire journey continuously, not occasionally.
              </p>
            </div>
            
            <div className="service-card">
              <h3 className="service-title">Integrated Care</h3>
              <p className="service-description">
                Doctors, lifestyle, and emotional support, working together as one system.
              </p>
            </div>
            
            <div className="service-card image-card">
              <div className="card-image doctor-patient"></div>
            </div>
            
            {/* Bottom Row */}
            <div className="service-card">
              <h3 className="service-title">Focused on Root, Not Symptoms</h3>
              <p className="service-description">
                Hormones, lifestyle, fertility, long-term health, everything connected, everything managed.
              </p>
            </div>
            
            <div className="service-card image-card">
              <div className="card-image consultation"></div>
            </div>
            
            <div className="service-card">
              <h3 className="service-title">Designed for Better Outcomes</h3>
              <p className="service-description">
                Not more visits. Not more confusion. Clear direction. Continuous support. Real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Life Section */}
      <section className={`modern-life-section ${isVisible.modernLife ? 'fade-in-on-scroll' : ''}`}>
        <div className="modern-life-container">
          <h2 className="modern-life-title">
            Built for <span className="modern-life-highlight">Modern Life</span>
          </h2>
          
          <div className="circular-image-container">
            <div className="circular-image"></div>
          </div>
          
          <h3 className="modern-life-subtitle">Focused on Root, Not Symptoms</h3>
          
          <p className="modern-life-description">
            Joyzen replaces fragmented care with a continuous system where hormones, fertility, and long-term health are managed together. Online or in clinic, it's the same person guiding your care. Tracking your progress. Adjusting your treatment.
          </p>
        </div>
      </section>

      {/* Clarity Call Section */}
      <section className={`clarity-call-section ${isVisible.clarityCall ? 'fade-in-on-scroll' : ''}`}>
        <div className="clarity-call-card">
          <div className="card-content">
            <h2 className="card-title">Book a clarity call</h2>
            <p className="card-description">
              If you would like to understand your reproductive health better or
              learn how Joyzen can support your journey, you can schedule a
              conversation with our care team.
            </p>
            <button className="book-call-button">
              Book Clarity Call <span className="phone-icon">📞</span>
            </button>
          </div>
          <div className="card-icon">÷</div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={`footer-section ${isVisible.footer ? 'fade-in-on-scroll' : ''}`}>
        <div className="footer-container">
          {/* Animated Background Elements */}
          <div className="footer-particles">
            <div className="particle particle1"></div>
            <div className="particle particle2"></div>
            <div className="particle particle3"></div>
            <div className="particle particle4"></div>
            <div className="particle particle5"></div>
            <div className="particle particle6"></div>
            <div className="particle particle7"></div>
            <div className="particle particle8"></div>
          </div>
          
          {/* Floating Geometric Shapes */}
          <div className="geometric-shapes">
            <div className="geo-shape triangle"></div>
            <div className="geo-shape circle"></div>
            <div className="geo-shape square"></div>
            <div className="geo-shape hexagon"></div>
          </div>
          
          {/* Wave Animation Background */}
          <div className="wave-container">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
          </div>
          
          {/* Main Footer Content */}
          <div className="footer-content">
            {/* Left Section - Brand */}
            <div className="footer-brand">
              <div className="brand-logo">
                <span className="logo-symbol">÷</span>
                <span className="brand-name">joyżen</span>
              </div>
              <p className="brand-tagline">Transforming healthcare through continuous care and innovation.</p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon">IG</span>
                </a>
                <a href="#" className="social-link" aria-label="Email">
                  <span className="social-icon">✉️</span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span className="social-icon">💼</span>
                </a>
                <a href="#" className="social-link" aria-label="WhatsApp">
                  <span className="social-icon">📱</span>
                </a>
              </div>
            </div>
            
            {/* Center Section - Navigation */}
            <div className="footer-nav">
              <div className="nav-column">
                <h3 className="nav-title">Services</h3>
                <ul className="nav-list">
                  <li><a href="#" className="nav-item">Hormone Management</a></li>
                  <li><a href="#" className="nav-item">Fertility Care</a></li>
                  <li><a href="#" className="nav-item">Long-term Health</a></li>
                  <li><a href="#" className="nav-item">Lifestyle Support</a></li>
                </ul>
              </div>
              <div className="nav-column">
                <h3 className="nav-title">Company</h3>
                <ul className="nav-list">
                  <li><a href="#" className="nav-item">About Us</a></li>
                  <li><a href="#" className="nav-item">Our Mission</a></li>
                  <li><a href="#" className="nav-item">Careers</a></li>
                  <li><a href="#" className="nav-item">Press</a></li>
                </ul>
              </div>
              <div className="nav-column">
                <h3 className="nav-title">Support</h3>
                <ul className="nav-list">
                  <li><a href="#" className="nav-item">Help Center</a></li>
                  <li><a href="#" className="nav-item">Privacy Policy</a></li>
                  <li><a href="#" className="nav-item">Terms of Service</a></li>
                  <li><a href="#" className="nav-item">Contact Us</a></li>
                </ul>
              </div>
            </div>
            
            {/* Right Section - CTA */}
            <div className="footer-cta">
              <div className="cta-content">
                <h3 className="cta-title">Start Your Journey</h3>
                <p className="cta-description">Book a clarity call and take the first step towards better healthcare.</p>
                <button className="cta-button footer-cta-btn">
                  <span>Get Started</span>
                  <span className="cta-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="bottom-left">
              <p className="copyright">© 2026 Joyzen. All rights reserved.</p>
              <p className="tagline">Built for healthcare. Designed for trust.</p>
            </div>
            <div className="bottom-right">
              <p className="developer-credit">Designed and Developed by TIC Global Services</p>
              <div className="tech-stack">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Modern</span>
                <span className="tech-badge">Innovative</span>
              </div>
            </div>
          </div>
          
          {/* Interactive Elements */}
          <div className="interactive-elements">
            <div className="floating-dots">
              <div className="dot dot1"></div>
              <div className="dot dot2"></div>
              <div className="dot dot3"></div>
              <div className="dot dot4"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
