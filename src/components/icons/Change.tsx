import React, { HtmlHTMLAttributes } from "react";

interface ChangeProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const Change: React.FC<ChangeProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1286 4.30641C14.7455 3.98974 14.1782 4.04362 13.8615 4.42675C13.5448 4.80987 13.5987 5.37717 13.9818 5.69384L17.4981 8.60012H3.99966C3.5026 8.60012 3.09966 9.00307 3.09966 9.50012C3.09966 9.99718 3.5026 10.4001 3.99966 10.4001H19.9997C20.3792 10.4001 20.718 10.162 20.8465 9.8048C20.975 9.44763 20.8656 9.04823 20.573 8.80641L15.1286 4.30641ZM8.87072 19.6938C9.25385 20.0105 9.82115 19.9566 10.1378 19.5735C10.4545 19.1904 10.4006 18.6231 10.0175 18.3064L6.50123 15.4001H19.9997C20.4967 15.4001 20.8997 14.9972 20.8997 14.5001C20.8997 14.0031 20.4967 13.6001 19.9997 13.6001H3.99966C3.62007 13.6001 3.2813 13.8383 3.1528 14.1954C3.0243 14.5526 3.1337 14.952 3.42628 15.1938L8.87072 19.6938Z"
        fill={color}
      />
    </svg>
  );
};

export default Change;
