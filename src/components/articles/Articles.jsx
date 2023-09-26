import React, { useState } from "react";
import Hero from "./Hero";
import ListArticles from "./ListArticles";
import ListCategories from "./ListCategories";

function Articles() {
  const [articles, setArticles] = useState([]);
  const getArticles = ({ urlArticleApi }) => {
    fetch(urlArticleApi)
      .then((response) => response.json())
      .then((res) => setArticles(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="row my-2">
        <Hero urlWanted={getArticles} />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-4">
            <ListArticles data={articles} />
          </div>
        </div>
        <div className="col-md-6 text-end">
          <ListCategories datalist={articles} />
        </div>
      </div>
    </>
  );
}

export default Articles;
