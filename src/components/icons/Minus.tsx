import React, { HtmlHTMLAttributes } from "react";

interface MinusProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  thick?: true;
  color?: string;
}

const Minus: React.FC<MinusProps> = ({
  thick = false,
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
      {thick ? (
        <path
          d="M1.9502 12.0002C1.9502 11.2822 2.53222 10.7002 3.25019 10.7002H20.7502C21.4681 10.7002 22.0502 11.2822 22.0502 12.0002C22.0502 12.7182 21.4681 13.3002 20.7502 13.3002H3.25019C2.53222 13.3002 1.9502 12.7182 1.9502 12.0002Z"
          fill={color}
        />
      ) : (
        <path
          d="M2.34961 12.0001C2.34961 11.503 2.75255 11.1001 3.24961 11.1001H20.7496C21.2467 11.1001 21.6496 11.503 21.6496 12.0001C21.6496 12.4972 21.2467 12.9001 20.7496 12.9001H3.24961C2.75255 12.9001 2.34961 12.4972 2.34961 12.0001Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Minus;
