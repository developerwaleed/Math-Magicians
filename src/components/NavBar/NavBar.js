import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './NavBar.module.css';

const Navbar = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul className={style.navItems}>
      <li>Home</li>
      <li>Calculator</li>
      <li>Quote</li>
    </ul>
  </nav>
);

export default Navbar;
