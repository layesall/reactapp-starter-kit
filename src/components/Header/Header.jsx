import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import './Header.css'


export default function Header() { 

  return (
    <header className='header-component' >
    
      <Navbar expand="lg" className='navbar'>
        <Navbar.Brand href="/" className='nav-brand'>
          Nikouone
        </Navbar.Brand>
        <Navbar.Collapse id="nikounav" >
          <Nav className="me-auto nav-link-group">
            <Nav.Link href="/" className='nav-link-item'>Home</Nav.Link>
            <Nav.Link href="#login" className='nav-link-item'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="nikounav" className='nav-toggle' />
      </Navbar>

    </header>
  );
}
