import React from "react";
import Grid from "./Grid";

function ListCoursesGrid(props) {
  return (
    <>
      <div className="row my-3">
        {props.dataGrid.map((c, index) => (
          <div className="col-md-6 my-2" key={index}>
            <Grid key={index} label={c.label} image={c.image} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ListCoursesGrid;
