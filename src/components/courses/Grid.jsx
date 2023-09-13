import React from "react";
import PropTypes from "prop-types";

function Grid({ id, label, image }) {
  const obj = { idtest: 1, labeltest: "ghita", imagetest: "url" };
  // let idtest = aobj.id;
  // let labeltest = aobj.label;
  // let imagetest = aobj.image;
  let { idtest, labeltest, imagetest } = obj;
  // console.log(idtest);
  // console.log(labeltest);
  // console.log(imagetest);
  return (
    <>
      {/* Destruction 
    (props)==={courses:{id,label}} */}
      {/* bs5-card */}
      <>
        <div className="card">
          <img className="card-img-top" src={image} alt="Photo" />
          <div className="card-body" id={id}>
            <h4 className="card-title">{label}</h4>
            <p className="card-text">Lorem, ipsum.</p>
          </div>
        </div>
      </>
    </>
  );
}
Grid.defaultProps = {
  label: "label",
  image: "https://picsum.photos/id/237/200/300",
};
Grid.prototype = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  image: PropTypes.string,
};

export default Grid;
