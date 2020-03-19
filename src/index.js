import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import NewsService from './services/news-service';
import {NewsServiceProvider} from './components/news-service-contex';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';

import store from './store';

const newsService = new NewsService();

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

