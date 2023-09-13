import React from "react";

function ListCourses(props) {
  console.log(props);
  return (
    <>
      <ul className="list-group my-5">
        {props.datalist.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item.label}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListCourses;
