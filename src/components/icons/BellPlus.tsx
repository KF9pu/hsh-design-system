import React, { HtmlHTMLAttributes } from "react";

interface BellPlusProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const BellPlus: React.FC<BellPlusProps> = ({
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
        d="M9.09976 20.1H14.8998V21.9H9.09976V20.1Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9002 9.4998V7.7998H20.5002V9.4998H22.2002V11.0998H20.5002V12.7998H18.9002V11.0998H17.2002V9.4998H18.9002Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.64961 10.2501C6.64961 8.16524 7.17687 6.58299 8.06174 5.53695C8.92925 4.51142 10.2249 3.9001 11.9996 3.9001C13.7744 3.9001 15.07 4.51142 15.9375 5.53695C16.2819 5.9441 16.5722 6.43249 16.7982 7.00014H18.7036C18.3992 5.99981 17.9372 5.11378 17.3117 4.37443C16.0543 2.88789 14.2249 2.1001 11.9996 2.1001C9.77437 2.1001 7.94498 2.88789 6.68748 4.37443C5.44735 5.84045 4.84961 7.88322 4.84961 10.2501L4.84961 11.0001C4.84961 13.4653 4.16638 14.9249 3.19325 15.8683C2.81171 16.2381 2.77211 16.7499 2.90849 17.1265C3.04719 17.5094 3.4273 17.9001 3.99916 17.9001H20.0001C20.5719 17.9001 20.952 17.5094 21.0907 17.1265C21.2271 16.7499 21.1875 16.2381 20.806 15.8683C20.3184 15.3957 19.9037 14.7935 19.6111 14.0002H17.7216C17.944 14.7969 18.2627 15.4931 18.6683 16.1001H5.33089C6.18147 14.8273 6.64961 13.1629 6.64961 11.0001L6.64961 10.2501Z"
        fill={color}
      />
    </svg>
  );
};

export default BellPlus;
