import React, { HtmlHTMLAttributes } from "react";

interface DotProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const Dot: React.FC<DotProps> = ({ color = "#171719", size = 24, ...rest }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12C18 15.312 15.312 18.0001 12 18.0001C8.688 18.0001 6 15.312 6 12C6 8.68801 8.688 6 12 6C15.312 6 18 8.68801 18 12Z"
        fill={color}
      />
    </svg>
  );
};

export default Dot;
