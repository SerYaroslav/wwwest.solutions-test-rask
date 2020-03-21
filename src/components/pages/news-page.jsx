import React from 'react';
import {connect} from 'react-redux';

const NewsPage = ({ news, loading }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container-lg d-flex flex-wrap">
      {news.articles.map(item => {
        return (
          <div className="container w-50 mt-5" key={item.title}>
            <h4 className="text-center font-weight-bold">{item.title}</h4>
            <img
              src={item.urlToImage}
              alt="img"
              className="img-fluid w-75 h-40 mx-auto mt-auto d-block"
            />
            <p>{item.content}</p>
            <div className="mt-1">{`Author: ${item.author}`}</div>
            <a href={item.url} target="blank">
              Read full article...
            </a>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ news, newsLoading }) => {
  return {
    news,
    loading: newsLoading,
  };
};

export default connect(mapStateToProps)(NewsPage);
