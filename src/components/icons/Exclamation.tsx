import React, { HtmlHTMLAttributes } from "react";

interface ExclamationProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const Exclamation: React.FC<ExclamationProps> = ({
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
      <path
        d="M13.1998 18.8C13.1998 19.4627 12.6625 20 11.9998 20C11.3371 20 10.7998 19.4627 10.7998 18.8C10.7998 18.1372 11.3371 17.6 11.9998 17.6C12.6625 17.6 13.1998 18.1372 13.1998 18.8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0998 15.4V4H12.8998V15.4H11.0998Z"
        fill={color}
      />
    </svg>
  );
};

export default Exclamation;
