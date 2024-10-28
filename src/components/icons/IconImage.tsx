import React, { HtmlHTMLAttributes } from "react";

interface IconImageProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const IconImage: React.FC<IconImageProps> = ({
  color = "#171719",
  ...rest
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.06985 2.59961C4.81553 2.59959 4.57349 2.59956 4.36953 2.61623C4.14712 2.6344 3.89201 2.67678 3.63703 2.8067C3.27952 2.98886 2.98886 3.27952 2.8067 3.63703C2.67678 3.89201 2.6344 4.14712 2.61623 4.36953C2.59956 4.57349 2.59959 4.81553 2.59961 5.06985V18.9294C2.59959 19.1837 2.59956 19.4257 2.61623 19.6297C2.6344 19.8521 2.67678 20.1072 2.8067 20.3622C2.98886 20.7197 3.27952 21.0104 3.63703 21.1925C3.89201 21.3224 4.14712 21.3648 4.36953 21.383C4.57347 21.3997 4.8155 21.3996 5.0698 21.3996H18.9294C19.1837 21.3996 19.4258 21.3997 19.6297 21.383C19.8521 21.3648 20.1072 21.3224 20.3622 21.1925C20.7197 21.0104 21.0104 20.7197 21.1925 20.3622C21.3224 20.1072 21.3648 19.8521 21.383 19.6297C21.3997 19.4258 21.3996 19.1837 21.3996 18.9294V5.06985C21.3996 4.81555 21.3997 4.57347 21.383 4.36953C21.3648 4.14712 21.3224 3.89201 21.1925 3.63703C21.0104 3.27952 20.7197 2.98886 20.3622 2.8067C20.1072 2.67678 19.8521 2.6344 19.6297 2.61623C19.4257 2.59956 19.1837 2.59959 18.9294 2.59961H5.06985ZM4.39963 4.49957C4.39963 4.44434 4.4444 4.39957 4.49963 4.39957H19.4996C19.5549 4.39957 19.5996 4.44434 19.5996 4.49957V13.8274L16.9995 11.2272L13.4995 14.7272L8.49947 9.72721L4.39963 13.8271V4.49957ZM4.39963 16.3726V19.4996C4.39963 19.5548 4.4444 19.5996 4.49963 19.5996H19.4996C19.5549 19.5996 19.5996 19.5548 19.5996 19.4996V16.373L16.9995 13.7728L13.4995 17.2728L8.49947 12.2728L4.39963 16.3726ZM17.2495 8C17.2495 8.69036 16.6898 9.25 15.9995 9.25C15.3091 9.25 14.7495 8.69036 14.7495 8C14.7495 7.30964 15.3091 6.75 15.9995 6.75C16.6898 6.75 17.2495 7.30964 17.2495 8Z"
        fill={color}
      />
    </svg>
  );
};

export default IconImage;
