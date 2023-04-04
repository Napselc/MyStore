import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../asessts/crown.svg"
import "./navigation.styles.scss"

const Navigation = () => {
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
            <Link className="nav-link" to="/auth">
                SIGN IN
            </Link>
          </div>
      </div>
      <Outlet></Outlet>

      </Fragment>
    );
  }

  export default Navigation