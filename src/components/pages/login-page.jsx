import React from 'react';

const LoginPage = () => {
  return (
    <form>
      <div className="col-sm-3 mx-auto mt-5">
        <div className="form-group">
          <label htmlFor="login-input">Login</label>
          <input
            type="text"
            className="form-control"
            id="login-input"
            placeholder="Enter login"
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
          />
        </div>
        <button type="submit" className="btn btn-success mx-auto d-block w-25">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginPage;