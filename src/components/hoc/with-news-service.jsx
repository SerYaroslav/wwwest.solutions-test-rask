import React from "react";
import { NewsServiceConsumer } from "../news-service-contex";

const withNewsService = () => Wrapped => {
  return props => {
    return (
      <NewsServiceConsumer>
        {
          newsService => {
            return <Wrapped {...props} newsService={newsService} />;
          }
        }
      </NewsServiceConsumer>
    );
  };
};

export default withNewsService;
