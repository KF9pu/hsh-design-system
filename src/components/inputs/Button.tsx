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
  outline = "outline",
}

export enum ButtonInteraction {
  normal = "normal",
  pressed = "pressed",
}

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  disabled?: boolean;
  leftIcon?: IconName; // 왼쪽 아이콘
  rightIcon?: IconName; // 오른쪽 아이콘
  leftIconColor?: string; // 왼쪽 아이콘 색상
  rightIconColor?: string; // 오른쪽 아이콘 색상
  leftIconSize?: number; // 왼쪽 아이콘 크기
  rightIconSize?: number; // 오른쪽 아이콘 크기
}

const Button: React.FC<ButtonProps> = ({
  type = ButtonType.solid,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  leftIconColor = "#171719", // 기본값 설정
  rightIconColor = "#171719", // 기본값 설정
  leftIconSize = 20, // 기본값 설정
  rightIconSize = 20, // 기본값 설정
}) => {
  const [Interaction, setInteraction] = useState();
  const LeftIconComponent = leftIcon ? Icon[leftIcon] : null;
  const RightIconComponent = rightIcon ? Icon[rightIcon] : null;

  return (
    <div className="button-wapper">
      <button className={`${type} ${Interaction}`} disabled={disabled}>
        {LeftIconComponent && (
          <LeftIconComponent color={leftIconColor} size={leftIconSize} />
        )}
        {children}
        {RightIconComponent && (
          <RightIconComponent color={rightIconColor} size={rightIconSize} />
        )}
      </button>
      <div className="interaction" />
    </div>
  );
};
export default Button;
