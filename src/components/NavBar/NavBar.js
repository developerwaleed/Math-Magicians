import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import style from './NavBar.module.css';

const Navbar = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul className={style.navItems}>
      <li>
        <Link to="/Math-magicians/">Home</Link>
      </li>
      <li>
        <Link to="/Math-magicians/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/Math-magicians/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
