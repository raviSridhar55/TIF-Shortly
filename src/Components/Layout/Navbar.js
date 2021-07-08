import React from 'react';
import {
  Nav,
  NavL,
  NavAuth,
  NavLinks,
  Logo,
  AuthLinks,
} from '../style/NavbarStyle';
import { FaBars } from 'react-icons/fa';
import { MobileIcon } from '../style/HamburgerStyle';

import { Btn1 } from '../style/MainStyle';
import logo from '../../Assets/logo.svg';

const Navbar = ({ mytoggleHandler }) => {
  return (
    <Nav>
      <NavL>
        <Logo>
          <img src={logo} alt='logo' />
        </Logo>
        <NavLinks>
          <a href='#!'>Features</a>
          <a href='#!'>Pricing</a>
          <a href='#!'>Resources</a>
        </NavLinks>
      </NavL>
      <NavAuth>
        <AuthLinks>
          <a href='#!'>Login</a>
          <Btn1>
            <p>Sign Up</p>
          </Btn1>
        </AuthLinks>
      </NavAuth>
      <MobileIcon onClick={mytoggleHandler}>
        <FaBars />
      </MobileIcon>
    </Nav>
  );
};

export default Navbar;
