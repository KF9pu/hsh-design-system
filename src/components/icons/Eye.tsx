import React from "react";

interface EyeProps {
  fill?: true;
  color?: string;
}

const Eye: React.FC<EyeProps> = ({ fill = false, color = "#171719" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {fill ? (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.2999 12.3919C22.4178 12.144 22.4178 11.8562 22.2999 11.6083C20.469 7.76008 16.545 5.1001 11.9998 5.1001C7.45462 5.1001 3.53069 7.76008 1.6998 11.6083C1.58184 11.8562 1.58184 12.144 1.6998 12.3919C3.53069 16.2401 7.45462 18.9 11.9998 18.9C16.545 18.9 20.469 16.2401 22.2999 12.3919ZM9.89983 12.0001C9.89983 10.8403 10.84 9.90012 11.9998 9.90012C13.1596 9.90012 14.0998 10.8403 14.0998 12.0001C14.0998 13.1599 13.1596 14.1001 11.9998 14.1001C10.84 14.1001 9.89983 13.1599 9.89983 12.0001ZM11.9998 8.10012C9.84592 8.10012 8.09983 9.84621 8.09983 12.0001C8.09983 14.154 9.84592 15.9001 11.9998 15.9001C14.1537 15.9001 15.8998 14.154 15.8998 12.0001C15.8998 9.84621 14.1537 8.10012 11.9998 8.10012Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.52357 12.0001C5.13658 8.96601 8.32988 6.9001 12.0057 6.9001C15.6815 6.9001 18.8748 8.96601 20.4878 12.0001C18.8748 15.0341 15.6815 17.1 12.0057 17.1C8.32988 17.1 5.13658 15.0341 3.52357 12.0001ZM22.3057 12.3919C22.4237 12.144 22.4237 11.8562 22.3057 11.6083C20.4748 7.76008 16.5509 5.1001 12.0057 5.1001C7.46048 5.1001 3.53654 7.76008 1.70566 11.6083C1.5877 11.8562 1.5877 12.144 1.70566 12.3919C3.53654 16.2401 7.46048 18.9 12.0057 18.9C16.5509 18.9 20.4748 16.2401 22.3057 12.3919ZM9.90569 12.0001C9.90569 10.8403 10.8459 9.9001 12.0057 9.9001C13.1655 9.9001 14.1057 10.8403 14.1057 12.0001C14.1057 13.1599 13.1655 14.1001 12.0057 14.1001C10.8459 14.1001 9.90569 13.1599 9.90569 12.0001ZM12.0057 8.1001C9.85178 8.1001 8.10569 9.84619 8.10569 12.0001C8.10569 14.154 9.85178 15.9001 12.0057 15.9001C14.1596 15.9001 15.9057 14.154 15.9057 12.0001C15.9057 9.84619 14.1596 8.1001 12.0057 8.1001Z"
            fill={color}
          />
        </>
      )}
    </svg>
  );
};

export default Eye;