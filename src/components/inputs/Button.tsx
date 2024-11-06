import React, { useState } from "react";
import "./css/Button.css";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum ButtonType {
  solid = "solid",
  outline = "outline",
}

export enum ButtonInteraction {
  normal = "normal",
  pressed = "pressed",
}

export enum ButtonIcon {
  android = "",
}

interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = ButtonType.solid,
  disabled = false,
}) => {
  const [Interaction, setInteraction] = useState();
  return (
    <button className={`${type} ${Interaction}`} disabled={disabled}></button>
  );
};
export default Button;
