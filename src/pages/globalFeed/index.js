import React, { useEffect } from "react";
import Feed from "../../components/feed";

import useFetch from "../../hooks/useFetch";

const GlobalFeed = () => {
  const apiUrl = "/articles?limit=10&offset=0";
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  console.log(response);
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Clone</h1>
          <p>My clone test page</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <div>Loading...</div>}
            {error && <div>Some error ...</div>}
            {!isLoading && response && (
              <Feed articles={response.articles}></Feed>
            )}
          </div>
          <div className="col-md-3">Popular tags</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
