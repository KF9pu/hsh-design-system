import React from "react";

interface SocialProps {
  color?: string;
}

const Social: React.FC<SocialProps> = ({ color = "#171719" }) => {
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
        d="M12.0008 3.1543C6.79627 3.1543 2.57227 6.43544 2.57227 10.4709C2.57227 12.9883 4.20341 15.1852 6.69255 16.524L5.64598 20.3614C5.62623 20.4378 5.6303 20.5183 5.65763 20.5923C5.68496 20.6662 5.73425 20.73 5.79888 20.7752C5.86352 20.8203 5.94042 20.8446 6.01926 20.8448C6.0981 20.845 6.17512 20.8211 6.23998 20.7763L10.8223 17.7309C11.2088 17.7309 11.6048 17.7969 12.0008 17.7969C17.2054 17.7969 21.4294 14.5157 21.4294 10.4709C21.4294 6.42601 17.2054 3.1543 12.0008 3.1543Z"
        fill={color}
      />
    </svg>
  );
};

export default Social;
