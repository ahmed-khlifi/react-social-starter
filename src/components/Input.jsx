import React, { useEffect, useRef, useState } from "react";

const Input = ({
  className,
  placeholder,
  onChange,
  type,
  value,
  required,
  errorMessage,
}) => {
  /** Handle error when input is required */
  const [error, setError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleBlur = (event) => {
      if (ref.current && !ref.current?.contains(event.target) && required) {
        if (isClicked && !value) setError(true);
      }
      if (ref.current && ref.current?.contains(event.target) && required) {
        // If user did not click on input
        !isClicked && setIsClicked(true);
      }
    };
    document.addEventListener("click", handleBlur);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleBlur);
    };
  }, [isClicked, ref, required, value]);
  return (
    <div ref={ref} className="input-container">
      <input
        className={`input ${className} ${
          (error || errorMessage) && "inputError"
        }`}
        placeholder={placeholder || "Your data"}
        onChange={(e) => {
          onChange(e.target.value);
          if (e.target.value.length > 0 && required) setError(false);
        }}
        type={type || "text"}
        value={value}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default Input;
