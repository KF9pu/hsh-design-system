import React, { HtmlHTMLAttributes } from "react";

interface MoreVerticalProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  tight?: true;
  color?: string;
  size?: number;
}

const MoreVertical: React.FC<MoreVerticalProps> = ({
  tight = false,
  color = "#171719",
  size = 24,
  ...rest
}) => {
  return (
    <>
      {tight ? (
        <svg
          width="12"
          height={size}
          viewBox="0 0 12 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M7.75 4.75C7.75 5.7165 6.9665 6.5 6 6.5C5.0335 6.5 4.25 5.7165 4.25 4.75C4.25 3.7835 5.0335 3 6 3C6.9665 3 7.75 3.7835 7.75 4.75Z"
            fill={color}
          />
          <path
            d="M7.75 12C7.75 12.9665 6.9665 13.75 6 13.75C5.0335 13.75 4.25 12.9665 4.25 12C4.25 11.0335 5.0335 10.25 6 10.25C6.9665 10.25 7.75 11.0335 7.75 12Z"
            fill={color}
          />
          <path
            d="M6 21C6.9665 21 7.75 20.2165 7.75 19.25C7.75 18.2835 6.9665 17.5 6 17.5C5.0335 17.5 4.25 18.2835 4.25 19.25C4.25 20.2165 5.0335 21 6 21Z"
            fill={color}
          />
        </svg>
      ) : (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M13.75 4.75C13.75 5.7165 12.9665 6.5 12 6.5C11.0335 6.5 10.25 5.7165 10.25 4.75C10.25 3.7835 11.0335 3 12 3C12.9665 3 13.75 3.7835 13.75 4.75Z"
            fill={color}
          />
          <path
            d="M13.75 12C13.75 12.9665 12.9665 13.75 12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12Z"
            fill={color}
          />
          <path
            d="M12 21C12.9665 21 13.75 20.2165 13.75 19.25C13.75 18.2835 12.9665 17.5 12 17.5C11.0335 17.5 10.25 18.2835 10.25 19.25C10.25 20.2165 11.0335 21 12 21Z"
            fill={color}
          />
        </svg>
      )}
    </>
  );
};

export default MoreVertical;
