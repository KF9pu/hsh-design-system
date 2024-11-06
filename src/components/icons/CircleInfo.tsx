import React, { HtmlHTMLAttributes } from "react";

interface CircleInfoProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
  size?: number;
}

const CircleInfo: React.FC<CircleInfoProps> = ({
  fill = false,
  color = "#171719",
  size = 24,
  ...rest
}) => {
  const iconData = {
    fill: `
      M11.9996 2.1001C6.53199 2.1001 2.09961 6.53248 2.09961 12.0001C2.09961 17.4677 6.53199 21.9001 11.9996 21.9001C17.4672 21.9001 21.8996 17.4677 21.8996 12.0001C21.8996 6.53248 17.4672 2.1001 11.9996 2.1001ZM11.9996 7.00012C11.4473 7.00012 10.9996 7.44784 10.9996 8.00012C10.9996 8.55241 11.4473 9.00012 11.9996 9.00012C12.5519 9.00012 12.9996 8.55241 12.9996 8.00012C12.9996 7.44784 12.5519 7.00012 11.9996 7.00012ZM11.0996 17.0001V10.5001H12.8996V17.0001H11.0996Z
    `,
    outlined: `
      M11.9996 2.1001C6.53199 2.1001 2.09961 6.53248 2.09961 12.0001C2.09961 17.4677 6.53199 21.9001 11.9996 21.9001C17.4672 21.9001 21.8996 17.4677 21.8996 12.0001C21.8996 6.53248 17.4672 2.1001 11.9996 2.1001ZM11.9996 3.9001C7.5261 3.9001 3.89961 7.52659 3.89961 12.0001C3.89961 16.4736 7.5261 20.1001 11.9996 20.1001C16.4731 20.1001 20.0996 16.4736 20.0996 12.0001C20.0996 7.52659 16.4731 3.9001 11.9996 3.9001ZM10.9996 8.0001C10.9996 7.44781 11.4473 7.0001 11.9996 7.0001C12.5519 7.0001 12.9996 7.44781 12.9996 8.0001C12.9996 8.55238 12.5519 9.0001 11.9996 9.0001C11.4473 9.0001 10.9996 8.55238 10.9996 8.0001ZM11.0996 10.5001V17.0001H12.8996V10.5001H11.0996Z
    `,
  };

  const path = fill ? iconData.fill : iconData.outlined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path} fill={color} />
    </svg>
  );
};

export default CircleInfo;
