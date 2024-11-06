import React, { HtmlHTMLAttributes } from "react";

interface PlayProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const Play: React.FC<PlayProps> = ({
  color = "#171719",
  size = 24,
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
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
