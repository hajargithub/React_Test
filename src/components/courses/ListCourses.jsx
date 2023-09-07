import React from "react";

function ListCourses(props) {
  return (
    <>
      <ul className="list-group my-5">
        {props.datalist.map((c, index) => (
          <li className="list-group-item" key={index}>
            {c.label}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListCourses;
