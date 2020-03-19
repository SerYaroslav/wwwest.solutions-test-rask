import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';

import store from './store';

const newsService = new newsService();

ReactDOM.render(
<Provider store={store}>
  <ErrorBoundry>
    <NewsServiceProvider value={newsService}>
      <Router>
        <App/>
      </Router>
    </NewsServiceProvider>
  </ErrorBoundry>
</Provider>, document.getElementById('root'));

