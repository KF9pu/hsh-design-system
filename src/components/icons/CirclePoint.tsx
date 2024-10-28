import React, { HtmlHTMLAttributes } from "react";

interface CirclePointProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const CirclePoint: React.FC<CirclePointProps> = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9996 3.9001C7.5261 3.9001 3.89961 7.52659 3.89961 12.0001C3.89961 16.4736 7.5261 20.1001 11.9996 20.1001C16.4731 20.1001 20.0996 16.4736 20.0996 12.0001C20.0996 7.52659 16.4731 3.9001 11.9996 3.9001ZM2.09961 12.0001C2.09961 6.53248 6.53199 2.1001 11.9996 2.1001C17.4672 2.1001 21.8996 6.53248 21.8996 12.0001C21.8996 17.4677 17.4672 21.9001 11.9996 21.9001C6.53199 21.9001 2.09961 17.4677 2.09961 12.0001Z"
        fill={color}
      />
      <path
        d="M9.39951 16.4001V8.0001H12.8414C14.7367 8.0001 15.9053 9.17772 15.8995 10.889C15.9053 12.6236 14.7134 13.7664 12.7832 13.7664H11.3762V16.4001H9.39951ZM11.3762 12.2001H12.4227C13.3588 12.2059 13.853 11.6838 13.853 10.889C13.853 10.1059 13.3588 9.6012 12.4227 9.6012H11.3762V12.2001Z"
        fill={color}
      />
    </svg>
  );
};

export default CirclePoint;
