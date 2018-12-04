import React from 'react';
import { Link } from 'react-router-dom';

import Img from 'components/Img';
import Banner from './banner.jpg';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <a href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </a>
        <div>
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/features">
            <span>Features</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
