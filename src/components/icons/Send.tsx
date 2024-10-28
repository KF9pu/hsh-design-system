import React, { HtmlHTMLAttributes } from "react";

interface SendProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
}

const Send: React.FC<SendProps> = ({
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
          d="M5.51804 3.41916C4.59252 2.98148 3.62345 3.93457 4.04569 4.86724L6.86739 11.1H14.0305V12.9H6.83441L3.95535 19.1215C3.52351 20.0547 4.49415 21.0174 5.42374 20.5779L21.5133 12.9724C22.3531 12.5754 22.3532 11.3806 21.5134 10.9835L5.51804 3.41916Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.04569 4.86724C3.62345 3.93457 4.59252 2.98148 5.51804 3.41916L21.5134 10.9835C22.3532 11.3806 22.3531 12.5754 21.5133 12.9724L5.42374 20.5779C4.49415 21.0174 3.52351 20.0547 3.95535 19.1215L7.263 11.9738L4.04569 4.86724ZM19.4055 11.9777L6.39955 18.1257L8.81779 12.9H14.0305V11.1H8.84327L6.47156 5.86121L19.4055 11.9777Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Send;
