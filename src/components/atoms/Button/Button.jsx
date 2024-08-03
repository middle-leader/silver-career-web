import React from "react";

function Button({
  children,
  icon,
  colorClass = "btn-primary",
  className,
  ...props
}) {
  return (
    <button
      className={`btn ${colorClass} justify-center flex items-center ${className}`}
      {...props}
    >
      {children}
      {icon && <i className={`${icon} ml-2`}></i>}
    </button>
  );
}

export default Button;
