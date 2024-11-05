import React, { HtmlHTMLAttributes, useState } from "react";
import "./css/Checkbox.css";
import LineHorizontal from "../icons/LineHorizontal";

export enum CheckboxType {
  Square = "square",
  Round = "round",
  Check = "check",
}

export enum CheckboxSize {
  Large = "large",
  Normal = "normal",
  Small = "small",
}

export enum CheckboxState {
  Checked = "checked",
  Partial = "partial",
  Unchecked = "unchecked",
}

export enum CheckboxInteraction {
  Normal = "normal",
  Hovered = "hovered",
  Pressed = "pressed",
}

interface CheckboxProps extends HtmlHTMLAttributes<HTMLDivElement> {
  type?: CheckboxType;
  size?: CheckboxSize;
  isChecked?: CheckboxState;
  disabled?: boolean;
  CheckBoxRef: React.MutableRefObject<HTMLInputElement | null>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  type = CheckboxType.Square,
  size = CheckboxSize.Normal,
  isChecked = CheckboxState.Unchecked,
  CheckBoxRef,
  disabled = false,
  onClick,
  ...rest
}) => {
  const [Interaction, setInteraction] = useState<CheckboxInteraction>(
    CheckboxInteraction.Normal
  );
  const [State, setState] = useState<CheckboxState>(CheckboxState.Unchecked);
  //   const CheckBoxRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={`checkbox-wrapper ${Interaction} `} {...rest}>
      <div
        className={`checkbox ${type} ${size} ${State} ${
          disabled ? "disabled" : ""
        }`}
        role="checkbox"
        aria-checked={State === CheckboxState.Checked}
        aria-disabled={disabled}
      >
        {State === CheckboxState.Partial ? (
          <LineHorizontal color="white" />
        ) : (
          (type === CheckboxType.Check || State === CheckboxState.Checked) && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={
                  "M19.6694 6.58096C20.1771 7.08864 20.1771 7.91175 19.6694 8.41943L10.6694 17.4194C10.1618 17.9271 9.33864 17.9271 8.83096 17.4194L4.33096 12.9194C3.82327 12.4118 3.82327 11.5886 4.33096 11.081C4.83864 10.5733 5.66175 10.5733 6.16943 11.081L9.7502 14.6617L17.831 6.58096C18.3386 6.07327 19.1618 6.07327 19.6694 6.58096Z"
                }
                fill={
                  type === CheckboxType.Check
                    ? State === CheckboxState.Checked
                      ? "#007bff"
                      : "rgba(55, 56, 60, 0.28)"
                    : "white"
                }
              />
            </svg>
          )
        )}
      </div>
      <input
        ref={CheckBoxRef}
        type="checkbox"
        className={`${size}`}
        onClick={onClick}
        onChange={(e) =>
          !disabled &&
          setState(
            e.target.checked ? CheckboxState.Checked : CheckboxState.Unchecked
          )
        }
        onMouseDown={() =>
          !disabled && setInteraction(CheckboxInteraction.Pressed)
        }
        onMouseUp={() =>
          !disabled && setInteraction(CheckboxInteraction.Normal)
        }
        onMouseLeave={() =>
          !disabled && setInteraction(CheckboxInteraction.Normal)
        }
      />
    </div>
  );
};

export default Checkbox;
