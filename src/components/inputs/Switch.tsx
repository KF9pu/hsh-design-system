import React, { useEffect, useState, type HtmlHTMLAttributes } from "react";
import "./css/Switch.css";

export enum SwitchState {
  Unchecked = "unchecked",
  Checked = "checked",
}
export enum SwitchSize {
  Large = "large",
  Normal = "normal",
  Small = "small",
}

interface SwitchProps extends HtmlHTMLAttributes<HTMLDivElement> {
  size?: SwitchSize;
  disabled?: boolean;
  isChecked?: SwitchState;
  SwitchRef: React.MutableRefObject<HTMLInputElement | null>;
}

const Switch: React.FC<SwitchProps> = ({
  size = SwitchSize.Normal,
  isChecked = SwitchState.Unchecked,
  disabled,
  SwitchRef,
  className,
  onClick,
  ...rest
}) => {
  const [State, setState] = useState<SwitchState>(isChecked);

  useEffect(() => {
    if (SwitchRef.current) {
      SwitchRef.current.checked = State === SwitchState.Checked;
    }
  }, [State, SwitchRef]);

  return (
    <div
      className={`switch-wrapper ${size} ${State} ${
        disabled ? "disabled" : ""
      } ${className ?? ""}`}
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        if (!disabled) {
          setState((prev) =>
            prev == SwitchState.Unchecked
              ? SwitchState.Checked
              : SwitchState.Unchecked
          );
          onClick?.(event);
        }
      }}
    >
      <div className={`switch ${size} ${State}`} {...rest}>
        <input disabled={disabled} type="checkbox" ref={SwitchRef} />
      </div>
    </div>
  );
};
export default Switch;
