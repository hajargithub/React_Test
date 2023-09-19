import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBRipple } from "mdb-react-ui-kit";

export default function ListCategories({ datalist }) {
  return (
    <MDBListGroup style={{ minWidth: "22rem" }} light>
      <MDBRipple>
        <MDBListGroupItem
          tag="a"
          href="#"
          action
          noBorders
          active
          aria-current="true"
          className="px-3"
        >
          Categories
        </MDBListGroupItem>
      </MDBRipple>
      {datalist.map((categorie, index) => (
        <MDBRipple key={index}>
          <MDBListGroupItem tag="a" href="#" action noBorders className="px-3">
            {categorie.title}
          </MDBListGroupItem>
        </MDBRipple>
      ))}
    </MDBListGroup>
  );
}
