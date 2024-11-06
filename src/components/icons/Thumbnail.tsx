import React, { HtmlHTMLAttributes } from "react";

interface ThumbnailProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.29941 3.1499C3.66429 3.1499 3.14941 3.66478 3.14941 4.2999V9.6999C3.14941 10.335 3.66429 10.8499 4.29941 10.8499H9.69941C10.3345 10.8499 10.8494 10.335 10.8494 9.6999V4.2999C10.8494 3.66477 10.3345 3.1499 9.69941 3.1499H4.29941ZM4.84941 9.1499V4.8499H9.14941V9.1499H4.84941Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2994 3.1499C13.6643 3.1499 13.1494 3.66478 13.1494 4.2999V9.6999C13.1494 10.335 13.6643 10.8499 14.2994 10.8499H19.6994C20.3345 10.8499 20.8494 10.335 20.8494 9.6999V4.2999C20.8494 3.66477 20.3345 3.1499 19.6994 3.1499H14.2994ZM14.8494 9.1499V4.8499H19.1494V9.1499H14.8494Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.14941 14.2999C3.14941 13.6648 3.66429 13.1499 4.29941 13.1499H9.69941C10.3345 13.1499 10.8494 13.6648 10.8494 14.2999V19.6999C10.8494 20.335 10.3345 20.8499 9.69941 20.8499H4.29941C3.66429 20.8499 3.14941 20.335 3.14941 19.6999V14.2999ZM4.84941 14.8499V19.1499H9.14941V14.8499H4.84941Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2994 13.1499C13.6643 13.1499 13.1494 13.6648 13.1494 14.2999V19.6999C13.1494 20.335 13.6643 20.8499 14.2994 20.8499H19.6994C20.3345 20.8499 20.8494 20.335 20.8494 19.6999V14.2999C20.8494 13.6648 20.3345 13.1499 19.6994 13.1499H14.2994ZM14.8494 19.1499V14.8499H19.1494V19.1499H14.8494Z"
        fill={color}
      />
    </svg>
  );
};

export default Thumbnail;
