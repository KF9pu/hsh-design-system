import React, { HtmlHTMLAttributes } from "react";

interface HandleProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const Handle: React.FC<HandleProps> = ({
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
        d="M3.09961 10.0001C3.09961 9.50304 3.50255 9.1001 3.99961 9.1001H19.9996C20.4966 9.1001 20.8996 9.50304 20.8996 10.0001C20.8996 10.4972 20.4966 10.9001 19.9996 10.9001H3.99961C3.50255 10.9001 3.09961 10.4972 3.09961 10.0001ZM3.09961 14.0001C3.09961 13.503 3.50255 13.1001 3.99961 13.1001H19.9996C20.4966 13.1001 20.8996 13.503 20.8996 14.0001C20.8996 14.4972 20.4966 14.9001 19.9996 14.9001H3.99961C3.50255 14.9001 3.09961 14.4972 3.09961 14.0001Z"
        fill={color}
      />
    </svg>
  );
};

export default Handle;
