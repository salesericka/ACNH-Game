import React from 'react';
import './Header.scss';
import logo from '../../assets/NewHorizons.png';
import {Link} from 'react-router-dom';
class Header extends React.Component {
   render(){
      return (
         <div className="homepage__title">
            <audio src="http://acnhapi.com/v1/hourly/3" autoPlay loop className="music"/>
            <Link to="/">
               <img src={logo} className="homepage__logo" alt="homepage-logo" />
            </Link>
         </div>   

      )
   }
}
export default Header;