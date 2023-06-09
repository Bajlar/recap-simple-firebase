import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='nav-container'>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </nav>
  );
};

export default Header;