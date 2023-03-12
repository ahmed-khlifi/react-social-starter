import React from "react";

const Button = ({ onClick, label, className, isLoading }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {isLoading ? "..." : label}
    </button>
  );
};

export default Button;
