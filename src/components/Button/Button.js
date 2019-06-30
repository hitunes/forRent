import "./Button.css";
import React from "react";

export const Button = ({ children, type = "grey", ...props }) => {
  return (
    <button className={`button ${type}`} {...props}>
      {children}
    </button>
  );
};
