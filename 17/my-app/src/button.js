import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { className, onClick } = props;

  return (
    <button className={className} onClick={() => alert("Hello World")}>
      good
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
