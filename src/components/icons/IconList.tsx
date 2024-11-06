import React, { HtmlHTMLAttributes } from "react";

interface IconListProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const IconList: React.FC<IconListProps> = ({
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
        d="M3.4 4.6001C2.6268 4.6001 2 5.2269 2 6.0001C2 6.7733 2.6268 7.4001 3.4 7.4001C4.1732 7.4001 4.8 6.7733 4.8 6.0001C4.8 5.2269 4.1732 4.6001 3.4 4.6001Z"
        fill={color}
      />
      <path
        d="M3.4 16.6001C2.6268 16.6001 2 17.2269 2 18.0001C2 18.7733 2.6268 19.4001 3.4 19.4001C4.1732 19.4001 4.8 18.7733 4.8 18.0001C4.8 17.2269 4.1732 16.6001 3.4 16.6001Z"
        fill={color}
      />
      <path
        d="M2 12.0001C2 11.2269 2.6268 10.6001 3.4 10.6001C4.1732 10.6001 4.8 11.2269 4.8 12.0001C4.8 12.7733 4.1732 13.4001 3.4 13.4001C2.6268 13.4001 2 12.7733 2 12.0001Z"
        fill={color}
      />
      <path
        d="M7.99999 5.1C7.50294 5.1 7.1 5.50294 7.1 6C7.1 6.49706 7.50294 6.9 7.99999 6.9H21C21.497 6.9 21.9 6.49706 21.9 6C21.9 5.50294 21.497 5.1 21 5.1H7.99999Z"
        fill={color}
      />
      <path
        d="M7.1 18C7.1 17.5029 7.50294 17.1 7.99999 17.1H21C21.497 17.1 21.9 17.5029 21.9 18C21.9 18.4971 21.497 18.9 21 18.9H7.99999C7.50294 18.9 7.1 18.4971 7.1 18Z"
        fill={color}
      />
      <path
        d="M7.99999 11.1C7.50294 11.1 7.1 11.5029 7.1 12C7.1 12.4971 7.50294 12.9 7.99999 12.9H21C21.497 12.9 21.9 12.4971 21.9 12C21.9 11.5029 21.497 11.1 21 11.1H7.99999Z"
        fill={color}
      />
    </svg>
  );
};

export default IconList;
