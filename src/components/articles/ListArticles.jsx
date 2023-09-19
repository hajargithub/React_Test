import { MDBListGroupItem } from "mdb-react-ui-kit";
import React from "react";
import Card from "./Card";

function ListArticles(props) {
  return (
    <>
      <MDBListGroupItem
        tag="a"
        href="#"
        action
        noBorders
        active
        aria-current="true"
        className="px-3"
      >
        Articles
      </MDBListGroupItem>
      {props.data.map((article, index) => (
        <Card article={article} key={index} />
      ))}
    </>
  );
}

export default ListArticles;
