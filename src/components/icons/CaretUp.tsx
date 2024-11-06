import React, { HtmlHTMLAttributes } from "react";

interface CaretUpProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const CaretUp: React.FC<CaretUpProps> = ({
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
        d="M13.2144 9.41731C12.7959 8.92907 12.5867 8.68495 12.3377 8.5955C12.1191 8.51699 11.8801 8.51699 11.6615 8.5955C11.4125 8.68495 11.2033 8.92907 10.7848 9.41731L8.26355 12.3588C7.54316 13.1992 7.18296 13.6195 7.17414 13.9752C7.16647 14.2844 7.30231 14.5798 7.54206 14.7752C7.81794 15 8.37141 15 9.47836 15H14.5209C15.6278 15 16.1813 15 16.4572 14.7752C16.6969 14.5798 16.8327 14.2844 16.8251 13.9752C16.8163 13.6195 16.4561 13.1992 15.7357 12.3588L13.2144 9.41731Z"
        fill={color}
      />
    </svg>
  );
};

export default CaretUp;
