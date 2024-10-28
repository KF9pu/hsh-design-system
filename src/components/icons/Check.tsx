import React, { HtmlHTMLAttributes } from "react";

interface CheckProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  thick?: true;
  color?: string;
}

const Check: React.FC<CheckProps> = ({
  thick = false,
  color = "#171719",
  ...rest
}) => {
  const iconData = {
    thick: `
      M19.6694 6.58096C20.1771 7.08864 20.1771 7.91175 19.6694 8.41943L10.6694 17.4194C10.1618 17.9271 9.33864 17.9271 8.83096 17.4194L4.33096 12.9194C3.82327 12.4118 3.82327 11.5886 4.33096 11.081C4.83864 10.5733 5.66175 10.5733 6.16943 11.081L9.7502 14.6617L17.831 6.58096C18.3386 6.07327 19.1618 6.07327 19.6694 6.58096Z
    `,
    outlined: `
      M19.386 6.86321C19.7375 7.21469 19.7375 7.78453 19.386 8.13601L10.386 17.136C10.0345 17.4875 9.46468 17.4875 9.11321 17.136L4.61321 12.636C4.26174 12.2845 4.26174 11.7147 4.61321 11.3632C4.96469 11.0117 5.53453 11.0117 5.88601 11.3632L9.74961 15.2268L18.1132 6.86321C18.4647 6.51174 19.0345 6.51174 19.386 6.86321Z
    `,
  };

  const path = thick ? iconData.thick : iconData.outlined;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path} fill={color} />
    </svg>
  );
};

export default Check;
