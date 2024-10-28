import React, { HtmlHTMLAttributes } from "react";

interface PauseProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const Pause: React.FC<PauseProps> = ({ color = "#171719", ...rest }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5H6.5V19H10V5ZM17.5 5H14V19H17.5V5Z"
        fill={color}
      />
    </svg>
  );
};

export default Pause;
