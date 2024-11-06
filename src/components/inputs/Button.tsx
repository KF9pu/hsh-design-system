import React, { useState } from "react";
import "./css/Button.css";
import * as Icons from "../icons";
import { IconName } from "./Icons";

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

interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  icon?: IconName;
}

const Button: React.FC<ButtonProps> = ({
  type = ButtonType.solid,
  disabled = false,
}) => {
  const [Interaction, setInteraction] = useState();
  const IconComponent = Icons["ArrowDown"];
  return (
    <button className={`${type} ${Interaction}`} disabled={disabled}></button>
  );
};
export default Button;
