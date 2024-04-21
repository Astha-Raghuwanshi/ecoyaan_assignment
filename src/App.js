import React from 'react';
import Navbar from './components/Navbar';
import SimpleSlider from './components/Slider';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';


function App() {



  return (
<>

      <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      {/* <Home /> */}
    
      <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route path="/about" exact element={<About />} />
      <Route path='/' exact element={ <Home />}></Route>
      
      </Routes>
   
       
       
      </Router>
     
      
    </>
  );
}

export default App;
