import React, { HtmlHTMLAttributes } from "react";

interface MoreHorizontalProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const MoreHorizontal: React.FC<MoreHorizontalProps> = ({
  color = "#171719",
  ...rest
}) => {
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
        d="M19.25 13.75C18.2835 13.75 17.5 12.9665 17.5 12C17.5 11.0335 18.2835 10.25 19.25 10.25C20.2165 10.25 21 11.0335 21 12C21 12.9665 20.2165 13.75 19.25 13.75Z"
        fill={color}
      />
      <path
        d="M12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12C13.75 12.9665 12.9665 13.75 12 13.75Z"
        fill={color}
      />
      <path
        d="M3 12C3 12.9665 3.7835 13.75 4.75 13.75C5.7165 13.75 6.5 12.9665 6.5 12C6.5 11.0335 5.7165 10.25 4.75 10.25C3.7835 10.25 3 11.0335 3 12Z"
        fill={color}
      />
    </svg>
  );
};

export default MoreHorizontal;
