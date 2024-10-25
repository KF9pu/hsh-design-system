import React from "react";

interface LogoFacebookProps {
  color?: string;
}

const LogoFacebook: React.FC<LogoFacebookProps> = ({ color = "#171719" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9996 2.1001C6.53481 2.1001 2.09961 6.5353 2.09961 12.0001C2.09961 16.9402 5.72301 21.0388 10.4552 21.7813V14.8612H7.94061V12.0001H10.4552V9.8221C10.4552 7.3372 11.9303 5.971 14.1974 5.971C15.2765 5.971 16.415 6.169 16.415 6.169V8.6044H15.1676C13.94 8.6044 13.5539 9.3667 13.5539 10.1488V12.01H16.2962L15.8606 14.8711H13.5539V21.7912C18.2861 21.0487 21.8996 16.9402 21.8996 12.0001C21.8996 6.5353 17.4743 2.11 12.0095 2.11L11.9996 2.1001Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoFacebook;
