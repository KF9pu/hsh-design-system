import React from "react";

interface ArrowRightProps {
  color?: string;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ color = "#171719" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.137 12.636C21.4885 12.2845 21.4885 11.7147 21.137 11.3632L14.137 4.36321C13.7855 4.01174 13.2157 4.01174 12.8642 4.36321C12.5127 4.71469 12.5127 5.28453 12.8642 5.63601L18.3278 11.0996H3.50059C3.00353 11.0996 2.60059 11.5026 2.60059 11.9996C2.60059 12.4967 3.00353 12.8996 3.50059 12.8996H18.3278L12.8642 18.3632C12.5127 18.7147 12.5127 19.2845 12.8642 19.636C13.2157 19.9875 13.7855 19.9875 14.137 19.636L21.137 12.636Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRight;
