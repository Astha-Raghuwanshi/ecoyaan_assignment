import React from 'react';
import '../App.css';
import  Button from './Button';
import './HeroSection2.css';
import { Link } from 'react-router-dom';
function HeroSection2() {
  return (
    <div className='hero-container2' >
    <h4>Follow us on Instagram
</h4> 
      <p> 

        For climate news, lifestyle tips, & updates  <br/>
      </p>
      <div className='hero-btns'>
      <a href="https://www.instagram.com/ecoyaan/" target="blank">
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          FOLLOW
        </Button>
</a>    
      </div>
    </div>
  );
}

export default HeroSection2;
