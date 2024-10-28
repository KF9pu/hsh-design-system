import React, { HtmlHTMLAttributes } from "react";

interface HeartProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
}

const Heart: React.FC<HeartProps> = ({
  fill = false,
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
      {fill ? (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9996 4.96814C14.1671 2.56703 17.8388 2.30168 20.3136 4.51059C22.9571 6.87009 23.1084 11.0531 20.6513 13.6116L20.6412 13.622L13.1696 21.1548C12.5258 21.8183 11.4733 21.8183 10.8296 21.1548L3.35797 13.622L3.34781 13.6116C0.890835 11.0531 1.04205 6.8701 3.68554 4.5106C6.16033 2.30167 9.83209 2.56703 11.9996 4.96814Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.9713 6.55582C9.50581 4.5211 6.72222 4.21288 4.88416 5.85348C3.00737 7.52864 2.89188 10.5324 4.6413 12.3598L11.9996 19.7784L19.3578 12.3598C21.1073 10.5324 20.9918 7.52865 19.115 5.85349C17.2769 4.21288 14.4934 4.5211 13.0279 6.55583L12.7299 6.9696C12.5607 7.20443 12.289 7.34359 11.9996 7.34359C11.7102 7.34359 11.4384 7.20443 11.2693 6.9696L10.9713 6.55582ZM11.9996 4.96814C14.1671 2.56703 17.8388 2.30168 20.3136 4.51059C22.9571 6.87009 23.1084 11.0531 20.6513 13.6116L20.6412 13.622L13.1696 21.1548C12.5259 21.8183 11.4733 21.8183 10.8296 21.1548L3.35797 13.622L3.34781 13.6116C0.890834 11.0531 1.04205 6.8701 3.68555 4.5106C6.16033 2.30167 9.8321 2.56703 11.9996 4.96814Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Heart;
