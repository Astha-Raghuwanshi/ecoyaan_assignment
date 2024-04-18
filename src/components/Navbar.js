import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import HeroSection from './HeroSection';
import About from './About';
import { useNavigate} from 'react-router-dom';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={<HeroSection />}>
            Ecoyaan
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='https://www.instagram.com/ecoyaan/'
                target='blank'
                className='nav-links'
              >
                Follow
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links'
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
