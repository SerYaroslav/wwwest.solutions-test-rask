const newsLoaded = (takenNews) => {
  return {
    type: 'FETCH_NEWS_SUCCESS',
    payload: takenNews,
  };
};

const newsError = (error) => {
  return {
    type: 'FETCH_NEWS_FAILURE',
    payload: error,
  };
};

const setUserData = (data) => {
  return {
    type: 'SET_USER_DATA',
    payload: data,
  };
};

const userLogout = () => {
  return {
    type: 'USER_LOGOUT',
  }
}

const fetchNews = (newsService, dispatch) => () => {
  newsService.getLiveTop()
    .then((data) => dispatch(newsLoaded(data)))
    .catch((err) => dispatch(newsError(err)));
};

export { fetchNews, setUserData, userLogout };