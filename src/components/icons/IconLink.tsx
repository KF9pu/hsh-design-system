import React, { HtmlHTMLAttributes } from "react";

interface IconLinkProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const IconLink: React.FC<IconLinkProps> = ({
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
        d="M18.1194 5.88028C16.8125 4.57337 14.6936 4.57337 13.3867 5.88028L10.4982 8.76875L9.22541 7.49595L12.1139 4.60748C14.1238 2.59765 17.3823 2.59763 19.3922 4.60748C21.4021 6.61733 21.4021 9.87595 19.3922 11.8858L16.5037 14.7743L15.2309 13.5015L18.1194 10.613C19.4263 9.30611 19.4263 7.18719 18.1194 5.88028ZM15.7724 9.5001L9.49961 15.7729L8.22681 14.5001L14.4996 8.2273L15.7724 9.5001ZM7.7724 11.5029L5.87979 13.3872C4.5734 14.6942 4.57305 16.8132 5.87979 18.1199C7.18646 19.4266 9.30485 19.4268 10.6118 18.1206L12.4968 16.2273L13.7724 17.4973L11.8867 19.3913L11.8853 19.3927C9.87546 21.4026 6.61684 21.4026 4.60699 19.3927C2.59714 17.3828 2.59716 14.1243 4.60699 12.1144L6.50241 10.2273L7.7724 11.5029Z"
        fill={color}
      />
    </svg>
  );
};

export default IconLink;
