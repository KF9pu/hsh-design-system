import React, { HtmlHTMLAttributes } from "react";

interface DocumentPersonProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
  size?: number;
}

const DocumentPerson: React.FC<DocumentPersonProps> = ({
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
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.36952 2.11671C5.57349 2.10005 5.81553 2.10007 6.06985 2.1001L13.6996 2.1001V8.9001H20.3996L20.3996 19.4299C20.3996 19.6842 20.3997 19.9262 20.383 20.1302C20.3648 20.3526 20.3224 20.6077 20.1925 20.8627C20.0104 21.2202 19.7197 21.5108 19.3622 21.693C19.1072 21.8229 18.8521 21.8653 18.6297 21.8835C18.4257 21.9001 18.1837 21.9001 17.9294 21.9001H6.06979C5.81549 21.9001 5.57347 21.9001 5.36952 21.8835C5.14712 21.8653 4.89201 21.8229 4.63703 21.693C4.27952 21.5108 3.98886 21.2202 3.8067 20.8627C3.67678 20.6077 3.6344 20.3526 3.61622 20.1302C3.59956 19.9262 3.59958 19.6842 3.59961 19.4299V4.57034C3.59958 4.31602 3.59956 4.07397 3.61622 3.87001C3.6344 3.6476 3.67678 3.39249 3.8067 3.13752C3.98886 2.78001 4.27952 2.48935 4.63703 2.30719C4.89201 2.17727 5.14712 2.13488 5.36952 2.11671ZM9.99973 15.8002C10.3435 15.8002 10.6377 15.6778 10.8825 15.433C11.1273 15.1882 11.2497 14.8939 11.2497 14.5502C11.2497 14.2064 11.1273 13.9122 10.8825 13.6674C10.6377 13.4226 10.3435 13.3002 9.99973 13.3002C9.65598 13.3002 9.3617 13.4226 9.11691 13.6674C8.87212 13.9122 8.74973 14.2064 8.74973 14.5502C8.74973 14.8939 8.87212 15.1882 9.11691 15.433C9.3617 15.6778 9.65598 15.8002 9.99973 15.8002ZM12.4997 18.3002V17.9408C12.4997 17.6908 12.432 17.4616 12.2966 17.2533C12.1612 17.045 11.9737 16.8887 11.7341 16.7845C11.4633 16.67 11.1846 16.5814 10.8982 16.5189C10.6117 16.4564 10.3122 16.4252 9.99973 16.4252C9.68723 16.4252 9.38775 16.4564 9.10129 16.5189C8.81483 16.5814 8.53618 16.67 8.26535 16.7845C8.02577 16.8887 7.83827 17.045 7.70285 17.2533C7.56743 17.4616 7.49973 17.6908 7.49973 17.9408V18.3002H12.4997Z"
            fill={color}
          />
          <path
            d="M19.5643 6.82552L15.7742 2.84591V6.82552H19.5643Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M9.99951 15.7998C10.3433 15.7998 10.6375 15.6774 10.8823 15.4326C11.1271 15.1878 11.2495 14.8936 11.2495 14.5498C11.2495 14.2061 11.1271 13.9118 10.8823 13.667C10.6375 13.4222 10.3433 13.2998 9.99951 13.2998C9.65576 13.2998 9.36149 13.4222 9.11669 13.667C8.8719 13.9118 8.74951 14.2061 8.74951 14.5498C8.74951 14.8936 8.8719 15.1878 9.11669 15.4326C9.36149 15.6774 9.65576 15.7998 9.99951 15.7998ZM7.49951 18.2998H12.4995V17.9404C12.4995 17.6904 12.4318 17.4613 12.2964 17.2529C12.161 17.0446 11.9735 16.8883 11.7339 16.7842C11.463 16.6696 11.1844 16.5811 10.8979 16.5186C10.6115 16.4561 10.312 16.4248 9.99951 16.4248C9.68701 16.4248 9.38753 16.4561 9.10107 16.5186C8.81461 16.5811 8.53597 16.6696 8.26513 16.7842C8.02555 16.8883 7.83805 17.0446 7.70263 17.2529C7.56722 17.4613 7.49951 17.6904 7.49951 17.9404V18.2998Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.36952 2.11623C5.57348 2.09956 5.81553 2.09958 6.06985 2.09961H15.0639L20.3996 7.70211V19.4294C20.3996 19.6837 20.3996 19.9257 20.383 20.1297C20.3648 20.3521 20.3224 20.6072 20.1925 20.8622C20.0103 21.2197 19.7197 21.5104 19.3622 21.6925C19.1072 21.8224 18.8521 21.8648 18.6297 21.883C18.4257 21.8997 18.1837 21.8996 17.9294 21.8996H6.06979C5.81549 21.8996 5.57347 21.8997 5.36952 21.883C5.14711 21.8648 4.89201 21.8224 4.63703 21.6925C4.27952 21.5104 3.98886 21.2197 3.8067 20.8622C3.67678 20.6072 3.6344 20.3521 3.61623 20.1297C3.59956 19.9257 3.59958 19.6837 3.59961 19.4294V4.56985C3.59958 4.31553 3.59956 4.07349 3.61623 3.86952C3.6344 3.64712 3.67678 3.39201 3.8067 3.13703C3.98886 2.77952 4.27952 2.48886 4.63703 2.3067C4.89201 2.17678 5.14711 2.1344 5.36952 2.11623ZM5.3996 3.99941C5.3996 3.94419 5.44437 3.89941 5.4996 3.89941H13.0996V8.89981H18.5996V19.9994C18.5996 20.0546 18.5548 20.0994 18.4996 20.0994H5.4996C5.44437 20.0994 5.3996 20.0546 5.3996 19.9994V3.99941ZM14.8996 7.09981V4.53692L17.3404 7.09981H14.8996Z"
            fill={color}
          />
        </>
      )}
    </svg>
  );
};

export default DocumentPerson;
