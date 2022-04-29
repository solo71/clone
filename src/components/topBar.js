import React, { useContext, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { CurrentUserContext } from "../contexts/currentUser";

const TopBar = () => {
  const [CurrentUserState] = useContext(CurrentUserContext);
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Clone
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact="true">
              Home
            </NavLink>
          </li>
          {CurrentUserState.isLoggedIn === false && (
            <Fragment>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Sign Up
                </NavLink>
              </li>
            </Fragment>
          )}
          {CurrentUserState.isLoggedIn === true && (
            <Fragment>
              <li className="nav-item">
                <NavLink to="/article/new" className="nav-link">
                  <i className="ion-compose"></i>
                  &nbsp; New post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/profiles/${CurrentUserState.currentUser.username}`}
                  className="nav-link"
                >
                  <img
                    className="user-pic"
                    src={CurrentUserState.currentUser.image}
                    alt=""
                  ></img>
                  &nbsp; {CurrentUserState.currentUser.username}
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
