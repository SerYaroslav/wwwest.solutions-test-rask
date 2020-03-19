import React from 'react';

import Header from '../header';
import {LoginPage} from '../pages';
import './app.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <LoginPage/>
    </React.Fragment>
  );
}

export default App;
