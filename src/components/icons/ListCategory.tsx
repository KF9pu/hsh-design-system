import React from "react";

interface ListCategoryProps {
  color?: string;
}

const ListCategory: React.FC<ListCategoryProps> = ({ color = "#171719" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.125 6C3.125 5.51675 3.51675 5.125 4 5.125H20C20.4832 5.125 20.875 5.51675 20.875 6C20.875 6.48325 20.4832 6.875 20 6.875H4C3.51675 6.875 3.125 6.48325 3.125 6Z"
        fill={color}
      />
      <path
        d="M3.125 18C3.125 17.5168 3.51675 17.125 4 17.125H14C14.4832 17.125 14.875 17.5168 14.875 18C14.875 18.4832 14.4832 18.875 14 18.875H4C3.51675 18.875 3.125 18.4832 3.125 18Z"
        fill={color}
      />
      <path
        d="M4 11.125C3.51675 11.125 3.125 11.5168 3.125 12C3.125 12.4832 3.51675 12.875 4 12.875H20C20.4832 12.875 20.875 12.4832 20.875 12C20.875 11.5168 20.4832 11.125 20 11.125H4Z"
        fill={color}
      />
    </svg>
  );
};

export default ListCategory;
