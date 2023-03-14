import React from "react";

const Button = ({ onClick, label, className, isLoading, disabed }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className} ${disabed && "disbaled-btn"}`}
      disabled={disabed}
    >
      {isLoading ? "..." : label}
    </button>
  );
};

export default Button;
