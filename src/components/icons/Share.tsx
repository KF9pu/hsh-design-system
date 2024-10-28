import React, { HtmlHTMLAttributes } from "react";

interface ShareProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const Share: React.FC<ShareProps> = ({ color = "#171719", ...rest }) => {
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
        d="M18 2C16.3431 2 15 3.34315 15 5C15 5.1766 15.0153 5.34964 15.0445 5.51787L7.92982 9.703C7.40817 9.26428 6.73495 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.83029 15 7.5818 14.6627 8.12498 14.1177L15.1019 18.2217C15.0354 18.4699 15 18.7308 15 19C15 20.6569 16.3431 22 18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C17.2651 16 16.5918 16.2643 16.0702 16.703L8.95547 12.5179C8.98474 12.3496 9 12.1766 9 12C9 11.7308 8.96455 11.47 8.89807 11.2218L15.875 7.11767C16.4182 7.66271 17.1697 8 18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2ZM16.8 5C16.8 4.33726 17.3373 3.8 18 3.8C18.6627 3.8 19.2 4.33726 19.2 5C19.2 5.66274 18.6627 6.2 18 6.2C17.3373 6.2 16.8 5.66274 16.8 5ZM6 10.8C5.33726 10.8 4.8 11.3373 4.8 12C4.8 12.6627 5.33726 13.2 6 13.2C6.66274 13.2 7.2 12.6627 7.2 12C7.2 11.3373 6.66274 10.8 6 10.8ZM16.8 19C16.8 18.3373 17.3373 17.8 18 17.8C18.6627 17.8 19.2 18.3373 19.2 19C19.2 19.6627 18.6627 20.2 18 20.2C17.3373 20.2 16.8 19.6627 16.8 19Z"
        fill={color}
      />
    </svg>
  );
};

export default Share;
