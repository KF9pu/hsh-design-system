import React, { HtmlHTMLAttributes } from "react";

interface PlayProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const Play: React.FC<PlayProps> = ({ color = "#171719", ...rest }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M7.5 19V5L18.5 12L7.5 19Z" fill={color} />
    </svg>
  );
};

export default Play;
