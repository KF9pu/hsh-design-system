import React, { HtmlHTMLAttributes } from "react";

interface ArrowDownProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const ArrowDown: React.FC<ArrowDownProps> = ({
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
        d="M11.3642 21.1365C11.7157 21.488 12.2855 21.488 12.637 21.1365L19.637 14.1365C19.9885 13.785 19.9885 13.2152 19.637 12.8637C19.2855 12.5122 18.7157 12.5122 18.3642 12.8637L12.9006 18.3273L12.9006 3.5001C12.9006 3.00304 12.4976 2.6001 12.0006 2.6001C11.5035 2.6001 11.1006 3.00304 11.1006 3.5001V18.3273L5.63698 12.8637C5.28551 12.5122 4.71566 12.5122 4.36419 12.8637C4.01272 13.2152 4.01272 13.785 4.36419 14.1365L11.3642 21.1365Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;
