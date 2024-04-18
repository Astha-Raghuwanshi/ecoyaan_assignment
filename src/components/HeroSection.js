import React from 'react';
import '../App.css';
import  Button from './Button';
import './HeroSection.css';
import About from './About';
import { useNavigate} from 'react-router-dom';


function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className='hero-container1'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
    <h4>Ecoyaan</h4>
     
      <p> 
Buy Less, Buy Better!  <br/>
      
Authentic source of truth for your sustainability needs.</p>
      <div className='hero-btns'>
        <Button 
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
          ABOUT US
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
