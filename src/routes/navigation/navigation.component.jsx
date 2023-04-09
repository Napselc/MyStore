import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component"; 
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as Logo } from "../../asessts/crown.svg"

import "./navigation.styles.scss"

const Navigation = () => {
  const {currentUser} = useContext(UserContext) 
  const {isCartOpen} = useContext(CartContext)
    return (
      <Fragment>
      <div className="navigation">
          <Link className="logo-container" to="/">
           <Logo className="logo">
           </Logo>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="shop">
                SHOP
            </Link>
            <Link>
            {
              currentUser ? (
                <span className="nav-link">SIGN OUT</span>
              ) : (
                <Link className="nav-link" to="/auth">SIGN IN</Link>
              )
            }
            </Link>
            <CartIcon></CartIcon>
          </div>
          {isCartOpen && <CartDropdown></CartDropdown>}
      </div>
      <Outlet></Outlet>

      </Fragment>
    );
  }

  export default Navigation