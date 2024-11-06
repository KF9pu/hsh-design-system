import React, { HtmlHTMLAttributes } from "react";

interface CircleCheckProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
  size?: number;
}

const CircleCheck: React.FC<CircleCheckProps> = ({
  fill,
  color = "#171719",
  size = 24,
  ...rest
}) => {
  const iconData = {
    filled: {
      path1: `
        M2.09961 12.0001C2.09961 6.53248 6.53199 2.1001 11.9996 2.1001C17.4672 2.1001 21.8996 6.53248 21.8996 12.0001C21.8996 17.4677 17.4672 21.9001 11.9996 21.9001C6.53199 21.9001 2.09961 17.4677 2.09961 12.0001ZM12.9996 16.2501C12.9996 16.8024 12.5519 17.2501 11.9996 17.2501C11.4473 17.2501 10.9996 16.8024 10.9996 16.2501C10.9996 15.6978 11.4473 15.2501 11.9996 15.2501C12.5519 15.2501 12.9996 15.6978 12.9996 16.2501ZM11.0996 6.75012V13.7501H12.8996V6.75012H11.0996Z  
      `,
      path2: undefined,
      path3: undefined,
    },
    outlined: {
      path1: `
        M11.9996 3.9001C7.5261 3.9001 3.89961 7.52659 3.89961 12.0001C3.89961 16.4736 7.5261 20.1001 11.9996 20.1001C16.4731 20.1001 20.0996 16.4736 20.0996 12.0001C20.0996 7.52659 16.4731 3.9001 11.9996 3.9001ZM2.09961 12.0001C2.09961 6.53248 6.53199 2.1001 11.9996 2.1001C17.4672 2.1001 21.8996 6.53248 21.8996 12.0001C21.8996 17.4677 17.4672 21.9001 11.9996 21.9001C6.53199 21.9001 2.09961 17.4677 2.09961 12.0001Z
      `,
      path2: `
        M12.9996 16.2501C12.9996 16.8024 12.5519 17.2501 11.9996 17.2501C11.4473 17.2501 10.9996 16.8024 10.9996 16.2501C10.9996 15.6978 11.4473 15.2501 11.9996 15.2501C12.5519 15.2501 12.9996 15.6978 12.9996 16.2501Z
      `,
      path3: `
        M11.0996 13.7501V6.7501H12.8996V13.7501H11.0996Z
      `,
    },
  };

  const { path1, path2, path3 } = fill ? iconData.filled : iconData.outlined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path1} fill={color} />
      {path2 && <path d={path2} fill={color} />}
      {path3 && (
        <path fillRule="evenodd" clipRule="evenodd" d={path3} fill={color} />
      )}
    </svg>
  );
};

export default CircleCheck;
