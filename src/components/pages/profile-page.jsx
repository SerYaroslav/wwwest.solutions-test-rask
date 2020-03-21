import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProfilePage = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <h2>Profile</h2>
      <span>Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Nostrum rerum velit animi, 
        reiciendis quos possimus corporis, asperiores adipisci 
        laboriosam accusantium dolorum! Quis laudantium natus dolorem 
        labore quidem, iusto vel vero veniam nulla nam nemo nostrum qui 
        recusandae sapiente earum quibusdam adipisci nobis pariatur sunt numquam? 
        Rem, nemo totam consequatur laborum perspiciatis rerum animi iste odio et 
        voluptas, eum quis beatae quod non itaque vero voluptates deleniti! 
        Dolorum nulla iure distinctio voluptatum atque? Odio incidunt nisi 
        in minima velit obcaecati voluptatum vitae, aspernatur fugiat quos, 
        itaque facere animi ratione atque magni quibusdam repudiandae, dolor iusto. 
        Assumenda consequuntur vero quia dolores officiis?
      </span>
    </div>
  );
};

const mapStateToProps = ({user}) => {
  return {
    authorized: user.authorized
  };
}

export default connect(mapStateToProps)(ProfilePage);