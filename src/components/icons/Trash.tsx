import React from "react";

interface TrashProps {
  color?: string;
}

const Trash: React.FC<TrashProps> = ({ color = "#171719" }) => {
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
        d="M9 3.39912H15V1.59912H9V3.39912ZM21 6.89951H19.6506L19.6506 19.4293C19.6506 19.6836 19.6506 19.9257 19.634 20.1296C19.6158 20.352 19.5734 20.6071 19.4435 20.8621C19.2613 21.2196 18.9707 21.5103 18.6132 21.6924C18.3582 21.8223 18.1031 21.8647 17.8807 21.8829C17.6767 21.8996 17.4347 21.8995 17.1804 21.8995H6.82083C6.56653 21.8995 6.32445 21.8996 6.1205 21.8829C5.89809 21.8647 5.64298 21.8223 5.38801 21.6924C5.0305 21.5103 4.73984 21.2196 4.55768 20.8621C4.42776 20.6071 4.38537 20.352 4.3672 20.1296C4.35054 19.9256 4.35056 19.6836 4.35059 19.4293L4.35059 6.89951H3V5.09951H21V6.89951ZM6.14976 6.89951H17.8498V19.999C17.8498 20.0542 17.805 20.099 17.7498 20.099H6.24976C6.19453 20.099 6.14976 20.0542 6.14976 19.999V6.89951ZM13.1 16.4995V10.4995H14.9V16.4995H13.1ZM9.1 10.4995V16.4995H10.9V10.4995H9.1Z"
        fill={color}
      />
    </svg>
  );
};

export default Trash;
