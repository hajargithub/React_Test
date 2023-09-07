import React from "react";
import PropTypes from "prop-types";

function Grid({ id, label, image }) {
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
