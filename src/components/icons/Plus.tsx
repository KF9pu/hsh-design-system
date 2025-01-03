import React, { HtmlHTMLAttributes } from "react";

interface PlusProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  thick?: true;
  color?: string;
  size?: number;
}

const Plus: React.FC<PlusProps> = ({
  thick = false,
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
      {thick ? (
        <path
          d="M12.0002 1.9502C12.7182 1.9502 13.3002 2.53223 13.3002 3.2502V10.7002H20.7502C21.4682 10.7002 22.0502 11.2822 22.0502 12.0002C22.0502 12.7182 21.4682 13.3002 20.7502 13.3002H13.3002V20.7502C13.3002 21.4682 12.7182 22.0502 12.0002 22.0502C11.2822 22.0502 10.7002 21.4682 10.7002 20.7502V13.3002H3.2502C2.53223 13.3002 1.9502 12.7182 1.9502 12.0002C1.9502 11.2822 2.53223 10.7002 3.2502 10.7002H10.7002V3.2502C10.7002 2.53223 11.2822 1.9502 12.0002 1.9502Z"
          fill={color}
        />
      ) : (
        <path
          d="M11.9996 2.3501C12.4967 2.3501 12.8996 2.75304 12.8996 3.2501V11.1001H20.7496C21.2467 11.1001 21.6496 11.503 21.6496 12.0001C21.6496 12.4972 21.2467 12.9001 20.7496 12.9001H12.8996V20.7501C12.8996 21.2472 12.4967 21.6501 11.9996 21.6501C11.5026 21.6501 11.0996 21.2472 11.0996 20.7501V12.9001H3.24961C2.75255 12.9001 2.34961 12.4972 2.34961 12.0001C2.34961 11.503 2.75255 11.1001 3.24961 11.1001H11.0996V3.2501C11.0996 2.75304 11.5026 2.3501 11.9996 2.3501Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Plus;
