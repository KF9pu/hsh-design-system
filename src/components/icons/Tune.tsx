import React, { HtmlHTMLAttributes } from "react";

interface TuneProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const Tune: React.FC<TuneProps> = ({
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
        d="M14.5 6.3C13.5611 6.3 12.8 7.06112 12.8 8C12.8 8.93888 13.5611 9.7 14.5 9.7C15.4388 9.7 16.2 8.93888 16.2 8C16.2 7.06112 15.4388 6.3 14.5 6.3ZM3.00006 8.99998H11.1449C11.5752 10.4457 12.9144 11.5 14.5 11.5C16.0855 11.5 17.4248 10.4457 17.855 8.99998H21.0001V7.19998H17.9081C17.5463 5.65251 16.1577 4.5 14.5 4.5C12.8422 4.5 11.4537 5.65251 11.0918 7.19998H3.00006V8.99998ZM12.855 17H21.0001V15.2H12.9081C12.5463 13.6525 11.1577 12.5 9.49996 12.5C7.84222 12.5 6.45366 13.6525 6.09182 15.2H3.00006V17H6.1449C6.57516 18.4457 7.91444 19.5 9.49996 19.5C11.0855 19.5 12.4248 18.4457 12.855 17ZM7.79996 16C7.79996 15.0611 8.56108 14.3 9.49996 14.3C10.4388 14.3 11.2 15.0611 11.2 16C11.2 16.9389 10.4388 17.7 9.49996 17.7C8.56108 17.7 7.79996 16.9389 7.79996 16Z"
        fill={color}
      />
    </svg>
  );
};

export default Tune;
