import React, { useState } from "react";
import Card from "./Card";
import Hero from "./Hero";
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
          <div className="ul">
            <li>
              <Card data={articles} />
            </li>
          </div>
        </div>
        <div className="col-md-6 text-end">
          <div className="ul">
            <li>
              <ListCategories datalist={articles} />
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
