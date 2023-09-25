import React from 'react';

import './Header.scss';
import logo from '../../assets/images/logo.png';

const Header = () => (
  <div className="header">
    <img className="header__logo" alt="logo" src={logo} />
  </div>
);

export default Header;
