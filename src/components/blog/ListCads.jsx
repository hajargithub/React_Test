import React from "react";
import Cards from "./Cards";

function ListCads() {
  return (
    <>
      <h3 className="my-4">List Of Products:</h3>
      <div className="row">
        <div className="col-4">
          <Cards></Cards>
        </div>
        <div className="col-4">
          <Cards></Cards>
        </div>
        <div className="col-4">
          <Cards></Cards>
        </div>
        <div className="col-4">
          <Cards></Cards>
        </div>
        <div className="col-4">
          <Cards></Cards>
        </div>
        <div className="col-4">
          <Cards></Cards>
        </div>
      </div>
    </>
  );
}

export default ListCads;
