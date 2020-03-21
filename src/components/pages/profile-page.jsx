import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProfilePage = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
};

const mapStateToProps = ({user}) => {
  return {
    authorized: user.authorized
  };
}

export default connect(mapStateToProps)(ProfilePage);