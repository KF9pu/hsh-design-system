import React, { HtmlHTMLAttributes } from "react";

interface MyPageProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const MyPage: React.FC<MyPageProps> = ({
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.9999 12.0001C13.8408 12.0001 15.3332 10.5077 15.3332 8.66678C15.3332 6.82583 13.8408 5.33345 11.9999 5.33345C10.1589 5.33345 8.66655 6.82583 8.66655 8.66678C8.66655 10.5077 10.1589 12.0001 11.9999 12.0001ZM12.0001 13.6666C9.27506 13.6666 6.86672 14.9791 5.34589 16.9999C6.86672 19.0207 9.27922 20.3332 12.0001 20.3332C14.7209 20.3332 17.1334 19.0207 18.6542 16.9999C17.1334 14.9791 14.7209 13.6666 12.0001 13.6666Z"
        fill={color}
      />
    </svg>
  );
};

export default MyPage;
