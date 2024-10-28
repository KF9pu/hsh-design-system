import React, { HtmlHTMLAttributes } from "react";

interface CompassProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
}

const Compass: React.FC<CompassProps> = ({
  fill = false,
  color = "#171719",
  ...rest
}) => {
  const iconData = {
    fill: {
      path1: `
        M11.9995 22.1854C17.6246 22.1854 22.1845 17.6256 22.1845 12.0004C22.1845 6.37531 17.6246 1.81543 11.9995 1.81543C6.37433 1.81543 1.81445 6.37531 1.81445 12.0004C1.81445 17.6256 6.37433 22.1854 11.9995 22.1854ZM17.1024 7.44951C17.1815 7.266 17.1576 7.07602 17.0407 6.95915C16.9239 6.84228 16.7339 6.81841 16.5504 6.89749L10.0448 9.69911C9.89208 9.76475 9.76378 9.89331 9.69813 10.0457L6.89651 16.5514C6.86195 16.6317 6.84703 16.713 6.85076 16.7888C6.85573 16.8868 6.89228 16.9758 6.95818 17.0417C7.07505 17.1588 7.26502 17.1827 7.44853 17.1036L13.9541 14.302C14.1068 14.2361 14.2351 14.1078 14.3008 13.9551L17.1024 7.44951ZM10.559 10.5602C9.76353 11.3557 9.76353 12.6454 10.559 13.4409C11.3544 14.2364 12.6445 14.2364 13.4399 13.4409C14.2354 12.6454 14.2354 11.3557 13.4399 10.5602C12.6445 9.76475 11.3544 9.76475 10.559 10.5602Z
      `,
      path2: undefined,
    },
    outlined: {
      path1: `
        M16.8153 8.38082C16.9753 8.03787 16.9037 7.63143 16.6361 7.36382C16.3685 7.09622 15.9621 7.02461 15.6191 7.18466L10.1646 9.73011C9.97301 9.81951 9.81902 9.9735 9.72962 10.1651L7.18417 15.6196C7.02412 15.9626 7.09573 16.369 7.36334 16.6366C7.63095 16.9042 8.03738 16.9758 8.38033 16.8158L13.8349 14.2703C14.0265 14.1809 14.1804 14.0269 14.2698 13.8354L16.8153 8.38082ZM12.9997 12.0002C12.9997 12.5525 12.552 13.0002 11.9997 13.0002C11.4474 13.0002 10.9997 12.5525 10.9997 12.0002C10.9997 11.4479 11.4474 11.0002 11.9997 11.0002C12.552 11.0002 12.9997 11.4479 12.9997 12.0002Z
      `,
      path2: `
        M11.9996 2.1001C6.53199 2.1001 2.09961 6.53248 2.09961 12.0001C2.09961 17.4677 6.53199 21.9001 11.9996 21.9001C17.4672 21.9001 21.8996 17.4677 21.8996 12.0001C21.8996 6.53248 17.4672 2.1001 11.9996 2.1001ZM3.89961 12.0001C3.89961 7.52659 7.5261 3.9001 11.9996 3.9001C16.4731 3.9001 20.0996 7.52659 20.0996 12.0001C20.0996 16.4736 16.4731 20.1001 11.9996 20.1001C7.5261 20.1001 3.89961 16.4736 3.89961 12.0001Z
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

export default Compass;
