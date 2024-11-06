import React, { HtmlHTMLAttributes } from "react";

interface DocumentProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
  size?: number;
}

const Document: React.FC<DocumentProps> = ({
  fill = false,
  color = "#171719",
  size = 24,
  ...rest
}) => {
  const iconData = {
    fill: `
      M5.36952 2.11671C5.57348 2.10005 5.81553 2.10007 6.06985 2.1001L13.6996 2.1001V8.9001H20.3996L20.3996 19.4299C20.3996 19.6842 20.3996 19.9262 20.383 20.1302C20.3648 20.3526 20.3224 20.6077 20.1925 20.8627C20.0103 21.2202 19.7197 21.5108 19.3622 21.693C19.1072 21.8229 18.8521 21.8653 18.6297 21.8835C18.4257 21.9001 18.1837 21.9001 17.9294 21.9001H6.06979C5.81549 21.9001 5.57347 21.9001 5.36952 21.8835C5.14711 21.8653 4.89201 21.8229 4.63703 21.693C4.27952 21.5108 3.98886 21.2202 3.8067 20.8627C3.67678 20.6077 3.6344 20.3526 3.61622 20.1302C3.59956 19.9262 3.59958 19.6842 3.59961 19.4299V4.57034C3.59958 4.31602 3.59956 4.07397 3.61622 3.87001C3.6344 3.6476 3.67678 3.39249 3.8067 3.13752C3.98886 2.78001 4.27952 2.48935 4.63703 2.30719C4.89201 2.17727 5.14711 2.13488 5.36952 2.11671Z
    `,
    outlined: `
      M5.36952 2.11623C5.57349 2.09956 5.81553 2.09958 6.06985 2.09961H15.0639L20.3996 7.70211V19.4294C20.3996 19.6837 20.3997 19.9257 20.383 20.1297C20.3648 20.3521 20.3224 20.6072 20.1925 20.8622C20.0104 21.2197 19.7197 21.5104 19.3622 21.6925C19.1072 21.8224 18.8521 21.8648 18.6297 21.883C18.4257 21.8997 18.1837 21.8996 17.9294 21.8996H6.06979C5.81549 21.8996 5.57347 21.8997 5.36952 21.883C5.14712 21.8648 4.89201 21.8224 4.63703 21.6925C4.27952 21.5104 3.98886 21.2197 3.8067 20.8622C3.67678 20.6072 3.6344 20.3521 3.61623 20.1297C3.59956 19.9257 3.59958 19.6837 3.59961 19.4294V4.56985C3.59958 4.31553 3.59956 4.07349 3.61623 3.86952C3.6344 3.64712 3.67678 3.39201 3.8067 3.13703C3.98886 2.77952 4.27952 2.48886 4.63703 2.3067C4.89201 2.17678 5.14712 2.1344 5.36952 2.11623ZM5.3996 3.99941C5.3996 3.94419 5.44437 3.89941 5.4996 3.89941H13.0996V8.89981H18.5996V19.9994C18.5996 20.0546 18.5548 20.0994 18.4996 20.0994H5.4996C5.44437 20.0994 5.3996 20.0546 5.3996 19.9994V3.99941ZM14.8996 7.09981V4.53692L17.3404 7.09981H14.8996Z
    `,
  };

  const path = fill ? iconData.fill : iconData.outlined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path} fill={color} />
      {fill ? (
        <path
          d="M19.5643 6.82552L15.7742 2.84591V6.82552H19.5643Z"
          fill={color}
        />
      ) : (
        <></>
      )}
    </svg>
  );
};

export default Document;
