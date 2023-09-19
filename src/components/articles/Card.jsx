import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React from "react";

function Card({ article }) {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <MDBCard className="my-2">
            <MDBCardImage
              src={article.image}
              position="top"
              alt="..."
              width="150px"
              height="150px"
            />
            <MDBCardBody>
              <MDBCardTitle>{article.title}</MDBCardTitle>
              <MDBCardText>{article.body}</MDBCardText>
              <MDBBtn href="#">Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </>
  );
}

export default Card;
