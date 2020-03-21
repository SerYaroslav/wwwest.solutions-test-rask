import React from 'react';
import { Link } from 'react-router-dom';

import {userLogout} from '../../actions';
import { connect } from 'react-redux';

const Header = ({ authorized, userLogout }) => {

  const onLogout = () => {
    userLogout();
  }

  const isLogin = authorized ? (
    <Link className="nav-link" to="#" onClick={onLogout}>
      Logout
    </Link>
  ) : (
    <Link className="nav-link" to="/login">
      Login
    </Link>
  ); 


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-around">
      <div>
        <Link className="navbar-brand" to="/">
          Home
        </Link>
      </div>
      <div className="collapse navbar-collapse flex-grow-0" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/news">
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            {isLogin}
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({user}) => {
  return {
    authorized: user.authorized
  }
}

const mapDispatchToProps = {
  userLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);