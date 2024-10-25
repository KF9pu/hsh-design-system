import React from "react";

interface MenuProps {
  thick?: true;
  color?: string;
}

const Menu: React.FC<MenuProps> = ({ thick = false, color = "#171719" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {thick ? (
        <>
          <path
            d="M2.75098 5C2.75098 4.30964 3.31062 3.75 4.00098 3.75H20.001C20.6913 3.75 21.251 4.30964 21.251 5C21.251 5.69036 20.6913 6.25 20.001 6.25H4.00098C3.31062 6.25 2.75098 5.69036 2.75098 5Z"
            fill={color}
          />
          <path
            d="M2.75098 19C2.75098 18.3096 3.31062 17.75 4.00098 17.75H20.001C20.6913 17.75 21.251 18.3096 21.251 19C21.251 19.6904 20.6913 20.25 20.001 20.25H4.00098C3.31062 20.25 2.75098 19.6904 2.75098 19Z"
            fill={color}
          />
          <path
            d="M4.00098 10.75C3.31062 10.75 2.75098 11.3096 2.75098 12C2.75098 12.6904 3.31062 13.25 4.00098 13.25H20.001C20.6913 13.25 21.251 12.6904 21.251 12C21.251 11.3096 20.6913 10.75 20.001 10.75H4.00098Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M3.10059 5.0001C3.10059 4.50304 3.50353 4.1001 4.00059 4.1001H20.0006C20.4976 4.1001 20.9006 4.50304 20.9006 5.0001C20.9006 5.49715 20.4976 5.9001 20.0006 5.9001H4.00059C3.50353 5.9001 3.10059 5.49715 3.10059 5.0001Z"
            fill={color}
          />
          <path
            d="M3.10059 19.0001C3.10059 18.503 3.50353 18.1001 4.00059 18.1001H20.0006C20.4976 18.1001 20.9006 18.503 20.9006 19.0001C20.9006 19.4972 20.4976 19.9001 20.0006 19.9001H4.00059C3.50353 19.9001 3.10059 19.4972 3.10059 19.0001Z"
            fill={color}
          />
          <path
            d="M4.00059 11.1001C3.50353 11.1001 3.10059 11.503 3.10059 12.0001C3.10059 12.4972 3.50353 12.9001 4.00059 12.9001H20.0006C20.4976 12.9001 20.9006 12.4972 20.9006 12.0001C20.9006 11.503 20.4976 11.1001 20.0006 11.1001H4.00059Z"
            fill={color}
          />
        </>
      )}
    </svg>
  );
};

export default Menu;