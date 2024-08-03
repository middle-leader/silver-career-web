import React from "react";
import PropTypes from "prop-types";

function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Button;
