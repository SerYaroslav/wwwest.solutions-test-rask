import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchNews } from '../../actions';
import { withNewsService } from '../hoc';

import Header from '../header';
import { LoginPage, HomePage, NewsPage, ProfilePage } from "../pages";

import './app.css';

const App = ({ fetchNews }) => {
  useEffect(() => fetchNews());

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch, { newsService }) => {

  return {
    fetchNews: fetchNews(newsService, dispatch),
  }
}

export default withNewsService()(connect(null, mapDispatchToProps)(App));
