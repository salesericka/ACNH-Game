
import React from 'react';
import './Header.scss';
import logo from '../../assets/NewHorizons.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
     <Link to="/">
         <div className="homepage__title">
            <img src={logo} className="homepage__logo"/>
         </div>   
      </Link>
  )
}

export default Header;