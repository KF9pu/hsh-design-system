import React, { HtmlHTMLAttributes } from "react";

interface CaretDownProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const CaretDown: React.FC<CaretDownProps> = ({
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
        d="M13.2144 14.5827C12.7959 15.071 12.5867 15.3151 12.3377 15.4045C12.1191 15.483 11.8801 15.483 11.6615 15.4045C11.4125 15.3151 11.2033 15.071 10.7848 14.5827L8.26355 11.6413C7.54316 10.8008 7.18296 10.3806 7.17414 10.0248C7.16647 9.71559 7.30231 9.42024 7.54206 9.22484C7.81794 9 8.37141 9 9.47836 9H14.5208C15.6278 9 16.1813 9 16.4571 9.22484C16.6969 9.42024 16.8327 9.71559 16.8251 10.0248C16.8162 10.3806 16.456 10.8008 15.7357 11.6413L13.2144 14.5827Z"
        fill={color}
      />
    </svg>
  );
};

export default CaretDown;
