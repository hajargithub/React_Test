import React from "react";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import ListCads from "./ListCads";
import ListUser from "./ListUser";
import SideBar from "./SideBar";

function Blog() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NavBar />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <SideBar />
          </div>
          <div className="col-8">
            <ListCads />
            <hr></hr>
            <ListUser />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
