import React from "react";

interface LineHorizontalProps {
  thick?: true;
  color?: string;
}

const LineHorizontal: React.FC<LineHorizontalProps> = ({
  thick = false,
  color = "#171719",
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {thick ? (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.7002 12.0002C4.7002 11.2822 5.28222 10.7002 6.00019 10.7002H18.0002C18.7182 10.7002 19.3002 11.2822 19.3002 12.0002C19.3002 12.7182 18.7182 13.3002 18.0002 13.3002H6.00019C5.28222 13.3002 4.7002 12.7182 4.7002 12.0002Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.09961 12.0001C5.09961 11.503 5.50255 11.1001 5.99961 11.1001H17.9996C18.4967 11.1001 18.8996 11.503 18.8996 12.0001C18.8996 12.4972 18.4967 12.9001 17.9996 12.9001H5.99961C5.50255 12.9001 5.09961 12.4972 5.09961 12.0001Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default LineHorizontal;
