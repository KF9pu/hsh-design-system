import React from "react";

interface TrophyProps {
  fill?: true;
  color?: string;
}

const Trophy: React.FC<TrophyProps> = ({ fill = false, color = "#171719" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {fill ? (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.60034 2.60059H6.50034H17.5003H18.4004V3.50059V6.10059H22.0003H22.9003V7.00059C22.9003 12.6104 18.4588 17.1828 12.9005 17.393V19.6006H17.5005C17.9975 19.6006 18.4005 20.0035 18.4005 20.5006C18.4005 20.9976 17.9975 21.4006 17.5005 21.4006H12.0005H6.50045C6.00339 21.4006 5.60045 20.9976 5.60045 20.5006C5.60045 20.0035 6.00339 19.6006 6.50045 19.6006H11.1004V17.393C5.54212 17.1828 1.10059 12.6104 1.10059 7.00059V6.10059H2.00059H5.60034V3.50059V2.60059ZM18.4004 11.0006V7.90059H21.0538C20.804 10.303 19.5651 12.4115 17.7515 13.8118C18.1671 12.9632 18.4004 12.0091 18.4004 11.0006ZM5.60034 11.0006C5.60034 12.009 5.83359 12.963 6.24908 13.8115C4.43565 12.4112 3.19693 10.3029 2.94712 7.90059H5.60034V11.0006Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.49944 2.6001H5.59944V3.5001V6.1001H1.99961H1.09961V7.0001C1.09961 12.6099 5.54113 17.1823 11.0994 17.3925V19.6001H6.49944C6.00239 19.6001 5.59944 20.003 5.59944 20.5001C5.59944 20.9972 6.00239 21.4001 6.49944 21.4001H11.9994H17.4994C17.9965 21.4001 18.3994 20.9972 18.3994 20.5001C18.3994 20.003 17.9965 19.6001 17.4994 19.6001H12.8994V17.3925C18.4578 17.1823 22.8993 12.6099 22.8993 7.0001V6.1001H21.9993H18.3994V3.5001V2.6001H17.4994H6.49944ZM18.3994 7.9001V11.0001C18.3994 12.0086 18.1662 12.9627 17.7506 13.8112C19.5642 12.4109 20.803 10.3025 21.0528 7.9001H18.3994ZM6.24822 13.8111C5.83271 12.9626 5.59944 12.0086 5.59944 11.0001V7.9001H2.94614C3.19596 10.3024 4.43473 12.4108 6.24822 13.8111ZM7.39944 11.0001V4.4001H16.5994V11.0001C16.5994 13.5406 14.5399 15.6001 11.9994 15.6001C9.45893 15.6001 7.39944 13.5406 7.39944 11.0001Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Trophy;