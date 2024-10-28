import React, { HtmlHTMLAttributes } from "react";

interface CareerProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const Career: React.FC<CareerProps> = ({ color = "#171719", ...rest }) => {
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
        d="M6.21972 4.25C6.21972 3.55964 5.66008 3 4.96973 3C4.27937 3 3.71973 3.55964 3.71973 4.25V19.7517C3.71973 20.4421 4.27937 21.0017 4.96973 21.0017C5.66008 21.0017 6.21972 20.4421 6.21972 19.7517V16.0422C8.26364 14.3384 10.3614 15.1047 12.4706 15.8752C14.6284 16.6635 16.7982 17.4561 18.9345 15.6125C19.7872 14.8789 20.2673 13.6879 20.2673 12.4516V5.40811C20.2673 4.57649 19.3981 4.22488 18.7523 4.73661C16.4538 6.55816 14.3125 5.7441 12.221 4.94902C10.2063 4.18308 8.23784 3.43475 6.21972 5.07715V4.25Z"
        fill={color}
      />
    </svg>
  );
};

export default Career;
