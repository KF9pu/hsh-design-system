import React from "react";

interface ButtonProps {
  label: string;
  size: "normal" | "small";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, size }) => {
  return (
    <button
      className="btn"
      style={{
        padding: size === "small" ? "12px 8px" : "",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
