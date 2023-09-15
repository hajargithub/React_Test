import React, { useState } from "react";

function Articles() {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    fetch("http://localhost:3001/articles")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="row my-2">
        <div className="col-md-6">
          <h1>List of Articles</h1>
        </div>
        <div className="col-md-6">
          <button onClick={getArticles} className="btn btn-success">
            Search
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="ul">
            <li>item</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
