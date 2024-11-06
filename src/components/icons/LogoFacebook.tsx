import React, { HtmlHTMLAttributes } from "react";

interface LogoFacebookProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
  real?: true;
}

const LogoFacebook: React.FC<LogoFacebookProps> = ({
  color = "#171719",
  size = 24,
  real,
  ...rest
}) => {
  return (
    <>
      {real ? (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <circle cx="11.9996" cy="11.9996" r="9.9" fill="#0866FF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5537 21.7785V14.8708H15.8604L16.296 12.0097H13.5537V10.1485C13.5537 9.3664 13.9398 8.6041 15.1674 8.6041H16.4148V6.1687C16.4148 6.1687 15.2763 5.9707 14.1972 5.9707C11.9301 5.9707 10.455 7.3369 10.455 9.8218V11.9998H7.94043V14.8609H10.455V21.7801C10.9583 21.8589 11.4741 21.8998 11.9994 21.8998C12.5282 21.8998 13.0474 21.8583 13.5537 21.7785Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M11.9996 2.1001C6.53481 2.1001 2.09961 6.5353 2.09961 12.0001C2.09961 16.9402 5.72301 21.0388 10.4552 21.7813V14.8612H7.94061V12.0001H10.4552V9.8221C10.4552 7.3372 11.9303 5.971 14.1974 5.971C15.2765 5.971 16.415 6.169 16.415 6.169V8.6044H15.1676C13.94 8.6044 13.5539 9.3667 13.5539 10.1488V12.01H16.2962L15.8606 14.8711H13.5539V21.7912C18.2861 21.0487 21.8996 16.9402 21.8996 12.0001C21.8996 6.5353 17.4743 2.11 12.0095 2.11L11.9996 2.1001Z"
            fill={color}
          />
        </svg>
      )}
    </>
  );
};

export default LogoFacebook;
