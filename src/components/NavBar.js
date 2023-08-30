import React from 'react';
import './ButtonStyles.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navBar">
      <nav className="navBarItems">
        <Link className="navHeading" to="/">Math Magicians</Link>

        <ul className="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quotes">Quote</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
