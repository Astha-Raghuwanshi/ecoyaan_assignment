// import React from 'react';
// import '../App.css';
// import './HeroSection.css';


// export default function About() {
//   return (
//     <div>
//     <h4>Get to know Ecoyaan</h4>
     
//       {/* <p> 
//       At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.


// We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:

// Tips and tricks to adopt a more eco-friendly and low-waste lifestyle
// Videos, posts, and quizzes on climate change and sustainability
// Events and pledges that invite you to adopt a more sustainable lifestyle


// </p> */}

//     </div>
//   );
// }

// ....................................
import React from 'react';
import '../App.css';
import  Button from './Button';
import './HeroSection.css';
import About from './About';
import { useNavigate} from 'react-router-dom';
import './About.css';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className='aboutt'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h4>Get to know Ecoyaan</h4>
     
      <p> 
      At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
      <br />

      <br />
We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
<br /><br />

Tips and tricks to adopt a more eco-friendly and low-waste lifestyle <br />
Videos, posts, and quizzes on climate change and sustainability<br />
Events and pledges that invite you to adopt a more sustainable lifestyle

</p>
    </div>
  );
}

export default HeroSection;

