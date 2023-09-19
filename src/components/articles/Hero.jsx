import React, { useState } from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";

function Hero({ urlWanted }) {
  const [value, setValue] = useState("");
  const urlArticleApi = "http://localhost:3001/articles";
  const search = () => {
    urlWanted({ urlArticleApi });
  };
  return (
    <header>
      <div
        className="p-5 text-center bg-image mt-2"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: "400px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Articles</h1>
              <MDBInput
                className="my-1"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                label="Search"
                id="SearchValue"
                type="text"
              />
              <MDBBtn onClick={search}>Search</MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
