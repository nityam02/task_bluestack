import React from 'react';
import {Navbar} from 'react-bootstrap';
import Logo from '../Assets/bluestacks.png';

function Header() {
    return (
    <div>
    <Navbar style={{backgroundColor: '#1f2640'}} variant="dark">
    <Navbar.Brand className="container mr-auto pl-5" href="#home">
      <img
        alt="logo" 
        src={Logo} 
        width="170" 
        height="50" 
        className="d-inline- align-top"
      />
    </Navbar.Brand>
  </Navbar>
      </div>
    )
}

export default Header;