const newsRequested = () => {
  return {
    type: 'FETCH_NEWS_REQUEST',
  };
};

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

const fetchNews = (newsService, dispatch) => () => {
  dispatch(newsRequested());
  newsService.getLiveTop()
    .then((data) => dispatch(newsLoaded(data)))
    .catch((err) => dispatch(newsError(err)));
};

export {
  fetchNews,
};