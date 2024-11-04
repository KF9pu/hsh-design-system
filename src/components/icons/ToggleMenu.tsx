import React, { HtmlHTMLAttributes } from "react";
import "./css/toggleMenu.css";

interface ToggleMenuProps extends HtmlHTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

const ToggleMenu: React.FC<ToggleMenuProps> = ({
  isOpen,
  className,
  ...rest
}) => {
  return (
    <div
      className={`menu-icon ${isOpen ? "open" : ""} ${className ?? ""}`}
      {...rest}
    >
      <span className="line line1" />
      <span className="line line2" />
      <span className="line line3" />
    </div>
  );
};

export default ToggleMenu;
