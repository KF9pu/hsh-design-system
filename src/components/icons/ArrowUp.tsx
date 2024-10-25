import React from "react";

interface ArrowUpProps {
  color?: string;
}

const ArrowUp: React.FC<ArrowUpProps> = ({ color = "#171719" }) => {
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
        d="M12.637 2.8637C12.2855 2.51223 11.7157 2.51223 11.3642 2.8637L4.36419 9.8637C4.01272 10.2152 4.01272 10.785 4.36419 11.1365C4.71566 11.488 5.28551 11.488 5.63698 11.1365L11.1006 5.67289V20.5001C11.1006 20.9972 11.5035 21.4001 12.0006 21.4001C12.4976 21.4001 12.9006 20.9972 12.9006 20.5001V5.67289L18.3642 11.1365C18.7157 11.488 19.2855 11.488 19.637 11.1365C19.9885 10.785 19.9885 10.2152 19.637 9.8637L12.637 2.8637Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowUp;
