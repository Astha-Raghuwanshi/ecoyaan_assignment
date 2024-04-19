import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';


function App() {
  return (
<>


      <Router>
        <Navbar />
        <Routes>
      
        <Route path='/' exact element={ <Home />}></Route>
        <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
