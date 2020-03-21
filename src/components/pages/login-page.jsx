import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setUserData } from "../../actions";
import { Redirect } from 'react-router-dom';

const LoginPage = ({ setUserData, userLogout, authorized, loginError }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = e => {
    setUsername(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const data = {
      username: username,
      password: password
    };

    setUserData(data);
  };

  const errorMassege = loginError ? (
    <div className="text-danger">
      The username or password you entered is incorrect
    </div>
  ) : null;

  if (authorized) {
    return <Redirect to="/profile" />;
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="col-sm-3 mx-auto mt-5">
        <div className="form-group">
          <label htmlFor="login-input">Login</label>
          <input
            type="text"
            className="form-control"
            id="login-input"
            placeholder="Enter login"
            value={username}
            onChange={onUsernameChange}
          />
          <small className="form-text text-muted">
            We'll never share your personal data.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
            value={password}
            onChange={onPasswordChange}
          />
          {errorMassege}
        </div>
        <button type="submit" className="btn btn-success mx-auto d-block w-25">
          Login
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = ({user, loginError}) => {
  return {
    authorized: user.authorized,
    loginError
  }
}

const mapDispatchToProps = {
  setUserData,
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);