import React, { HtmlHTMLAttributes } from "react";

interface GraduationProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const Graduation: React.FC<GraduationProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9995 4.9455L3.62274 9.49956L11.9995 14.0547L20.3763 9.50063L11.9995 4.9455ZM11.2951 3.27963C11.5099 3.16306 11.7513 3.1001 11.9995 3.1001C12.2478 3.1001 12.4892 3.16306 12.7039 3.27963L21.5894 8.11136C21.8457 8.25094 22.0512 8.45965 22.1902 8.70437C22.3247 8.94124 22.3951 9.2074 22.3992 9.47539C22.3995 9.48372 22.3996 9.4921 22.3996 9.50049V15.5005H20.5996V11.428L18.8885 12.3583C18.8958 12.4046 18.8996 12.4521 18.8996 12.5005V18.0005C18.8996 18.3414 18.707 18.653 18.4021 18.8055L12.4022 21.8055C12.1488 21.9322 11.8506 21.9322 11.5972 21.8055L5.59723 18.8055C5.29233 18.653 5.09973 18.3414 5.09973 18.0005V12.5005C5.09973 12.4519 5.10358 12.4042 5.11098 12.3577L2.40967 10.8888C2.15333 10.7493 1.94787 10.5405 1.80888 10.2958C1.67012 10.0515 1.59961 9.77604 1.59961 9.49954C1.59961 9.22304 1.67012 8.94756 1.80888 8.70325C1.94788 8.45853 2.15289 8.25006 2.40922 8.11049L11.2951 3.27963ZM12.7044 15.7203L17.0996 13.3308V17.4443L11.9997 19.9943L6.89971 17.4443V13.3304L11.2946 15.7203C11.5093 15.8368 11.7513 15.9001 11.9995 15.9001C12.2478 15.9001 12.4897 15.8369 12.7044 15.7203Z"
        fill={color}
      />
    </svg>
  );
};

export default Graduation;
