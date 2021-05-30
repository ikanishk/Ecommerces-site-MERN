import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from "./StateProvider";
import Login from "./Login";
import { auth } from "./firebase";

function Header(){

  const [{ basket, user }, dispatch] = useStateValue();

  const login =()=>{
    if(user){
      auth.signOut();
    }
  }

  return<nav className="header">
  <Link to='/'>
  <img className="header__logo"
  src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
  alt=""/>
  </Link>

  <div className="header_search">
  <input className="header_searchInput" type="text"  placeholder="Search name" />
  <SearchIcon className="header_searchIcon"/>
  </div>

    <div className="header__nav">
    <Link to={!user && "/login"} className="header__link">
      <div onClick={login} className="header__option">
        <span className="optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
        <span className="optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span> 
         {/* //this checks that if the user is signed in or out, if signed in, it shows "SIgn Out" and vice versa */}
      </div>
    </Link>

    <Link to="/" className="header__link">
      <div className="header__option">
        <span className="optionLineOne"> Buy </span>
        <span className="optionLineTwo"> Prime </span>
      </div>
    </Link>

    <Link to="/" className="header__link">
      <div className="header__option">
        <span className="optionLineOne">Return</span>
        <span className="optionLineTwo">orders</span>
      </div>
    </Link>
    </div>

    <Link to="/checkout" className="header__link">
      <div className="header_optionBasket">
      <ShoppingCartIcon className="header_shopCart"/>
        <span className="optionLineTwo header_basketCount">{basket?.length}</span>
      </div>
    </Link>

    </nav>

}

export default Header
