import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Switch from '@mui/material/Switch';
import './style.css'; 
import logo from '../src/logo.png';

const Navbar = ({ filterItem, menuList }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <Switch {...label} />
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="menubar">Dil Kush Restaurant Menu</h1>
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <div className="btn-group">
            {menuList.map((curElem, index) => (
              <button
                key={index}
                className="btn-group__item"
                onClick={() => {
                  filterItem(curElem);
                  setIsMenuOpen(false);
                }}
              >
                {curElem}
              </button>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

Navbar.propTypes = {
  filterItem: PropTypes.func.isRequired,
  menuList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;