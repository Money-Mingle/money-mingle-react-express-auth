
import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Button from 'react-bootstrap/Button';

const WelcomeButton = () => {
  const fadeAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-150px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 900 },
  });

  return (
    
    <section id="button">
      <div className="home-container">
      <animated.div style={fadeAnimation}>
        <h1 className="home-h1">Community.Savings.Trust</h1>
        <br></br>
        <h2 className="home-h2">Embark on a shared journey towards financial prosperity</h2>
        <br />
          <Button variant="primary" size = "lg" id="welcome-button">
            <Link to="/about" className="btn-get-started scrollto" >
              WELCOME
            </Link>
          </Button>
        </animated.div>
      </div>
    </section>
  );
};

export default WelcomeButton;


    