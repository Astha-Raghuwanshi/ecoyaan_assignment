import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import HomePage from './HomePage';
import About from './About';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import HeroSection2 from './HeroSection2';
import HeroSection3 from './HeroSection3';
import './slider.css'; // Import your CSS file for slider styles



const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
  };

  



  return (
    
    <div className="slider-container">

      <Slider {...settings}>
        <div>
          <HeroSection />
        </div>
        <div>
        <HeroSection2 />
        </div>
        <div>
        <HeroSection3 />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
