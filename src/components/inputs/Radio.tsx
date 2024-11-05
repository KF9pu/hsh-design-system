import React, { HtmlHTMLAttributes, useState } from "react";
import "./Radio.css";

export enum RadioSize {
  Large = "large",
  Normal = "normal",
  Small = "small",
}
export enum RadioState {
  Checked = "checked",
  Unchecked = "unchecked",
}
export enum RadioInteraction {
  Normal = "normal",
  Hovered = "hovered",
  Pressed = "pressed",
}
interface RadioProps extends HtmlHTMLAttributes<HTMLDivElement> {
  size?: RadioSize;
  disabled?: boolean;
  RadioRef: React.MutableRefObject<HTMLInputElement | null>;
}

const Radio: React.FC<RadioProps> = ({
  size = RadioSize.Normal,
  disabled,
  RadioRef,
  ...rest
}) => {
  const [Interaction, setInteraction] = useState<RadioInteraction>(
    RadioInteraction.Normal
  );
  const [State, setState] = useState<RadioState>(RadioState.Unchecked);

  return (
    <div className={`radio-wrapper ${Interaction}`} {...rest}>
      <div
        className={`radio ${size} ${State} ${disabled ? "disabled" : ""}`}
        role="checkbox"
        aria-checked={State === RadioState.Checked}
        aria-disabled={disabled}
      >
        <div className={`center_dot ${size}`} />
      </div>
      <input
        ref={RadioRef}
        type="checkbox"
        className={`${size}`}
        onChange={(e) =>
          !disabled &&
          setState(e.target.checked ? RadioState.Checked : RadioState.Unchecked)
        }
        onMouseDown={() =>
          !disabled && setInteraction(RadioInteraction.Pressed)
        }
        onMouseUp={() => !disabled && setInteraction(RadioInteraction.Normal)}
        onMouseLeave={() =>
          !disabled && setInteraction(RadioInteraction.Normal)
        }
      />
    </div>
  );
};
export default Radio;
