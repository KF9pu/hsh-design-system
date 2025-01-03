import React, { HtmlHTMLAttributes } from "react";

interface PinProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
  size?: number;
}

const Pin: React.FC<PinProps> = ({
  fill = false,
  color = "#171719",
  size = 24,
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {fill ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.0997 4.40011H5.9997V2.60011H8.99495L8.9997 2.6001H14.9997L15.0045 2.60011H17.9997V4.40011H15.8997V10.1276L19.22 14.5605C19.4243 14.8333 19.457 15.198 19.3045 15.5028C19.152 15.8075 18.8404 16 18.4996 16H12.8998V22.0001L11.9998 23.0001L11.0998 22.0001V16H5.49961C5.15882 16 4.84725 15.8075 4.69475 15.5028C4.54225 15.198 4.57497 14.8332 4.77928 14.5605L8.0997 10.1276V4.40011Z"
          fill={color}
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.99593 2.60011L9.00068 2.6001H15.0007L15.0054 2.60011H18.0007V4.40011H15.9007V10.1276L19.2209 14.5605C19.4252 14.8333 19.458 15.198 19.3054 15.5028C19.1529 15.8075 18.8414 16 18.5006 16H12.9008V22.0001L12.0008 23.0001L11.1008 22.0001V16H5.50059C5.1598 16 4.84823 15.8075 4.69573 15.5028C4.54323 15.198 4.57595 14.8332 4.78026 14.5605L8.10068 10.1276V4.40011H6.00068V2.60011H8.99593ZM9.90068 4.40011V10.4273C9.90068 10.6219 9.83764 10.8112 9.72101 10.9669L7.29922 14.2H16.702L14.2803 10.9669C14.1637 10.8111 14.1007 10.6218 14.1007 10.4273V4.40011H9.90068Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Pin;
