import React, { useState } from "react";

function FormCourse({ registerCourse }) {
  const [label, setLabel] = useState("");
  const [image, setImage] = useState("");
  const labelField = (event) => {
    // console.log("event", event);
    // console.log("target", event.target);
    // console.log("value", event.target.value);
    setLabel(event.target.value);
  };

  const imageField = (event) => {
    setImage(event.target.value);
  };
  const transfer = (event) => {
    event.preventDefault();
    registerCourse({ label, image });
    console.log("trasfer", label, image);
    setLabel("");
    setImage("");
  };
  return (
    <>
      <form action="">
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            onChange={labelField}
            type="text"
            name=""
            id="course"
            placeholder="add a label"
            className="form-control"
            value={label}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            value={image}
            onChange={imageField}
            type="url"
            name=""
            id="image"
            placeholder="add a picture"
            className="form-control"
          />
        </div>
        <div className="d-grid my-2">
          <button onClick={transfer} className="btn btn-primary">
            Add Course
          </button>
        </div>
      </form>
    </>
  );
}

export default FormCourse;
