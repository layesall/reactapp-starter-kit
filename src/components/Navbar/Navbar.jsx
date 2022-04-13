import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <header className='navbar-component'>
      <Link to='/' className='nav-brand'>NIKOUONE</Link>

      <nav className='nav-link-group'>
        <Link to='/' className='nav-link-item'>Home</Link>
      </nav>
    </header>
  );
}
