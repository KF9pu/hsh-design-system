import React, { HtmlHTMLAttributes } from "react";

interface CircleBlockProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const CircleBlock: React.FC<CircleBlockProps> = ({
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
        d="M11.9996 2.1001C6.53199 2.1001 2.09961 6.53248 2.09961 12.0001C2.09961 17.4677 6.53199 21.9001 11.9996 21.9001C17.4672 21.9001 21.8996 17.4677 21.8996 12.0001C21.8996 6.53248 17.4672 2.1001 11.9996 2.1001ZM3.89961 12.0001C3.89961 7.52659 7.5261 3.9001 11.9996 3.9001C13.9121 3.9001 15.6698 4.56292 17.0555 5.67139L5.6709 17.056C4.56243 15.6703 3.89961 13.9126 3.89961 12.0001ZM6.94369 18.3288C8.3294 19.4373 10.0871 20.1001 11.9996 20.1001C16.4731 20.1001 20.0996 16.4736 20.0996 12.0001C20.0996 10.0876 19.4368 8.32988 18.3283 6.94418L6.94369 18.3288Z"
        fill={color}
      />
    </svg>
  );
};

export default CircleBlock;
