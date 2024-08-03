import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  icon,
  colorClass = "btn-primary",
  size = "lg",
  className,
  ...props
}) {
  const sizeClass =
    size === "sm" ? "h-[36px] w-full text-sm" : "h-[48px] w-[240px] text-lg";

  return (
    <button
      className={`btn ${colorClass} justify-center flex items-center ${sizeClass} ${className}`}
      {...props}
    >
      {children}
      {icon && <i className={`${icon} ml-2`}></i>}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  colorClass: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  colorClass: "btn-primary",
  onClick: () => {},
  className: "",
};

export default Button;
