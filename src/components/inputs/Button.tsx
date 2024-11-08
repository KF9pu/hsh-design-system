import React, { HtmlHTMLAttributes, useState } from "react";
import "./css/Button.css";
import Icon, { IconName } from "./Icon";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum ButtonType {
  solid = "solid",
  outlinePrimary = "outlinePrimary",
  outlineSecondary = "outlineSecondary",
  outlineAssistive = "outlineAssistive",
}

export enum ButtonInteraction {
  normal = "normal",
  pressed = "pressed",
}

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  leftIcon?: IconName; // 왼쪽 아이콘
  rightIcon?: IconName; // 오른쪽 아이콘
  leftIconColor?: string; // 왼쪽 아이콘 색상
  rightIconColor?: string; // 오른쪽 아이콘 색상
}

const Button: React.FC<ButtonProps> = ({
  type = ButtonType.solid,
  size = ButtonSize.medium,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  leftIconColor = "#171719", // 기본값 설정
  rightIconColor = "#171719", // 기본값 설정
  className,
  ...rest
}) => {
  const [Interaction, setInteraction] = useState<ButtonInteraction>(
    ButtonInteraction.normal
  );

  const IconSize = {
    [ButtonSize.small as ButtonSize]: 16,
    [ButtonSize.medium as ButtonSize]: 18,
    [ButtonSize.large as ButtonSize]: 20,
  };

  const LeftIconComponent = leftIcon ? (
    <Icon name={leftIcon} color={leftIconColor} size={IconSize[size]} />
  ) : null;
  const RightIconComponent = rightIcon ? (
    <Icon name={rightIcon} color={rightIconColor} size={IconSize[size]} />
  ) : null;

  return (
    <div
      className={`button-wrapper ${type} ${className} ${
        disabled ? "disabled" : ""
      }`}
      onMouseDown={() => setInteraction(ButtonInteraction.pressed)}
      onMouseLeave={() => setInteraction(ButtonInteraction.normal)}
      onMouseUp={() => setInteraction(ButtonInteraction.normal)}
    >
      <button className={`${size} ${type}`} disabled={disabled} {...rest}>
        {LeftIconComponent}
        {children}
        {RightIconComponent}
      </button>
      <div className={`interaction ${Interaction}`} />
    </div>
  );
};
export default Button;
