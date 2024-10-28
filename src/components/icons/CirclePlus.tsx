import React, { HtmlHTMLAttributes } from "react";

interface CirclePlusProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
}

const CirclePlus: React.FC<CirclePlusProps> = ({
  fill,
  color = "#171719",
  ...rest
}) => {
  const iconData = {
    filled: {
      path1: `
        M11.0996 12.9001V17.0001H12.8996V12.9001H16.9996V11.1001H12.8996V7.00012H11.0996V11.1001H6.9996V12.9001H11.0996ZM2.09961 12.0001C2.09961 6.53248 6.53199 2.1001 11.9996 2.1001C17.4672 2.1001 21.8996 6.53248 21.8996 12.0001C21.8996 17.4677 17.4672 21.9001 11.9996 21.9001C6.53199 21.9001 2.09961 17.4677 2.09961 12.0001Z
      `,
      path2: undefined,
    },
    outlined: {
      path1: `
        M11.0996 12.9001V17.0001H12.8996V12.9001H16.9996V11.1001H12.8996V7.0001H11.0996V11.1001H6.99961V12.9001H11.0996Z
      `,
      path2: `
        M11.9996 3.9001C7.5261 3.9001 3.89961 7.52659 3.89961 12.0001C3.89961 16.4736 7.5261 20.1001 11.9996 20.1001C16.4731 20.1001 20.0996 16.4736 20.0996 12.0001C20.0996 7.52659 16.4731 3.9001 11.9996 3.9001ZM2.09961 12.0001C2.09961 6.53248 6.53199 2.1001 11.9996 2.1001C17.4672 2.1001 21.8996 6.53248 21.8996 12.0001C21.8996 17.4677 17.4672 21.9001 11.9996 21.9001C6.53199 21.9001 2.09961 17.4677 2.09961 12.0001Z
      `,
    },
  };

  const { path1, path2 } = fill ? iconData.filled : iconData.outlined;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path1} fill={color} />
      {path2 && <path d={path2} fill={color} />}
    </svg>
  );
};

export default CirclePlus;
