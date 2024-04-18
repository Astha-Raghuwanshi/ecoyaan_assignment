import React from 'react';
import '../App.css';
import  Button from './Button';
import './HeroSection3.css';

function HeroSection3() {
  return (
    <div className='hero-container3' >
    <h4>We would love to work with you

</h4>
     
      <p> 

        Are you a business that truly cares about sustainability?
 <br/>
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET IN TOUCH
        </Button>        
      </div>
    </div>
  );
}

export default HeroSection3;
