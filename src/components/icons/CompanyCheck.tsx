import React, { HtmlHTMLAttributes } from "react";

interface CompanyCheckProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
}

const CompanyCheck: React.FC<CompanyCheckProps> = ({
  fill = false,
  color = "#171719",
  ...rest
}) => {
  const iconData = {
    fill: {
      path1: `
        M23.8371 4.00668L22.5643 2.73389L19.6007 5.69749L18.0371 4.13389L16.7643 5.40668L19.6007 8.24308L23.8371 4.00668Z
      `,
      path2: `
        M5.44982 2.1001C5.02243 2.10003 4.61646 2.09997 4.2834 2.14475C3.91128 2.19478 3.49863 2.31507 3.15709 2.65661C2.81555 2.99814 2.69526 3.4108 2.64523 3.78291C2.60046 4.11597 2.60052 4.52194 2.60059 4.94933L2.6006 21.9001H14.6006V17.0001H16.4005V21.8999H21.4006L21.4006 12.9491C21.4007 12.5217 21.4007 12.1158 21.356 11.7827C21.3059 11.4106 21.1856 10.9979 20.8441 10.6564C20.5026 10.3149 20.0899 10.1946 19.7178 10.1445C19.3847 10.0998 18.9788 10.0998 18.5514 10.0999L15.4006 10.0999L15.4006 4.94932C15.4006 4.52193 15.4007 4.11597 15.3559 3.78291C15.3059 3.4108 15.1856 2.99814 14.8441 2.65661C14.5025 2.31507 14.0899 2.19478 13.7178 2.14475C13.3847 2.09997 12.9787 2.10003 12.5513 2.1001H5.44982ZM11.5006 11.9001H6.50057V10.1001H11.5006V11.9001ZM11.5006 7.90009H6.50057V6.10009H11.5006V7.90009Z
      `,
    },
    outlined: {
      path1: `
        M23.837 4.00668L22.5642 2.73389L19.6006 5.69749L18.037 4.13389L16.7643 5.40668L19.6006 8.24308L23.837 4.00668Z
      `,
      path2: `
        M4.2834 2.14475C4.61646 2.09997 5.02243 2.10003 5.44982 2.1001H12.5514C12.9788 2.10003 13.3847 2.09997 13.7178 2.14475C14.0899 2.19478 14.5025 2.31507 14.8441 2.65661C15.1856 2.99814 15.3059 3.4108 15.3559 3.78291C15.4007 4.11597 15.4007 4.52194 15.4006 4.94934L15.4006 10.1001H18.5514C18.9787 10.1 19.3847 10.1 19.7178 10.1447C20.0899 10.1948 20.5025 10.3151 20.8441 10.6566C21.1856 10.9981 21.3059 11.4108 21.3559 11.7829C21.4007 12.116 21.4007 12.5219 21.4006 12.9493L21.4006 21.9001H2.6006L2.60059 4.94933C2.60052 4.52194 2.60046 4.11597 2.64523 3.78291C2.69526 3.4108 2.81555 2.99814 3.15709 2.65661C3.49863 2.31507 3.91129 2.19478 4.2834 2.14475ZM4.40057 3.9999C4.40057 3.94467 4.44535 3.8999 4.50057 3.8999H13.5006C13.5558 3.8999 13.6006 3.94467 13.6006 3.9999V20.0999H9.90057V15.9999H8.10057V20.0999H4.40057V3.9999ZM15.4006 20.0999H19.6006V11.9999C19.6006 11.9447 19.5558 11.8999 19.5006 11.8999H15.4006L15.4006 20.0999ZM11.5006 11.9001H6.50061V10.1001H11.5006V11.9001ZM11.5006 7.9001H6.50061V6.1001H11.5006V7.9001Z
      `,
    },
  };

  const { path1, path2 } = fill ? iconData.fill : iconData.outlined;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path1} fill={color} />
      {path2 ? (
        <path fillRule="evenodd" clipRule="evenodd" d={path2} fill={color} />
      ) : (
        <></>
      )}
    </svg>
  );
};

export default CompanyCheck;
