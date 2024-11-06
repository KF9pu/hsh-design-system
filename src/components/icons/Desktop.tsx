import React, { HtmlHTMLAttributes } from "react";

interface DesktopProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
  size?: number;
}

const Desktop: React.FC<DesktopProps> = ({
  fill = false,
  color = "#171719",
  size = 24,
  ...rest
}) => {
  const iconData = {
    fill: `
      M4.3179 3.1001C4.06358 3.10007 3.82153 3.10005 3.61757 3.11671C3.39516 3.13489 3.14005 3.17727 2.88508 3.30719C2.52757 3.48935 2.23691 3.78001 2.05475 4.13752C1.92483 4.3925 1.88244 4.64761 1.86427 4.87001C1.84761 5.07398 1.84763 5.31602 1.84766 5.57034V14.9299C1.84763 15.1842 1.84761 15.4262 1.86427 15.6302C1.88244 15.8526 1.92483 16.1077 2.05475 16.3627C2.23691 16.7202 2.52757 17.0109 2.88508 17.193C3.14005 17.3229 3.39516 17.3653 3.61757 17.3835C3.82153 17.4002 4.06358 17.4001 4.3179 17.4001L11.1002 17.4001V19.6001H5.99985V21.4001H17.9998V19.6001H12.9002V17.4001L19.6774 17.4001C19.9317 17.4001 20.1738 17.4002 20.3777 17.3835C20.6001 17.3653 20.8552 17.3229 21.1102 17.193C21.4677 17.0109 21.7584 16.7202 21.9406 16.3627C22.0705 16.1077 22.1129 15.8526 22.131 15.6302C22.1477 15.4262 22.1477 15.1842 22.1476 14.9299V5.57034C22.1477 5.31604 22.1477 5.07396 22.131 4.87001C22.1129 4.64761 22.0705 4.3925 21.9406 4.13752C21.7584 3.78001 21.4677 3.48935 21.1102 3.30719C20.8552 3.17727 20.6001 3.13489 20.3777 3.11671C20.1738 3.10005 19.9317 3.10007 19.6774 3.1001H4.3179Z
    `,
    outlined: `
      M3.61757 3.11671C3.82153 3.10005 4.06358 3.10007 4.3179 3.1001H19.6774C19.9317 3.10007 20.1738 3.10005 20.3777 3.11671C20.6001 3.13489 20.8552 3.17727 21.1102 3.30719C21.4677 3.48935 21.7584 3.78001 21.9406 4.13752C22.0705 4.3925 22.1129 4.64761 22.131 4.87001C22.1477 5.07396 22.1477 5.31604 22.1476 5.57034V14.9299C22.1477 15.1842 22.1477 15.4262 22.131 15.6302C22.1129 15.8526 22.0705 16.1077 21.9406 16.3627C21.7584 16.7202 21.4677 17.0109 21.1102 17.193C20.8552 17.3229 20.6001 17.3653 20.3777 17.3835C20.1738 17.4002 19.9317 17.4001 19.6774 17.4001L12.9002 17.4001V19.6001H17.9998V21.4001H5.99985V19.6001H11.1002V17.4001L4.3179 17.4001C4.06358 17.4001 3.82153 17.4002 3.61757 17.3835C3.39516 17.3653 3.14005 17.3229 2.88508 17.193C2.52757 17.0109 2.23691 16.7202 2.05475 16.3627C1.92483 16.1077 1.88244 15.8526 1.86427 15.6302C1.84761 15.4262 1.84763 15.1842 1.84766 14.9299V5.57034C1.84763 5.31602 1.84761 5.07398 1.86427 4.87001C1.88244 4.64761 1.92483 4.3925 2.05475 4.13752C2.23691 3.78001 2.52757 3.48935 2.88508 3.30719C3.14005 3.17727 3.39516 3.13489 3.61757 3.11671ZM3.7477 4.8999C3.69247 4.8999 3.6477 4.94467 3.6477 4.9999V15.4999C3.6477 15.5551 3.69247 15.5999 3.7477 15.5999H20.2477C20.3029 15.5999 20.3477 15.5551 20.3477 15.4999V4.9999C20.3477 4.94467 20.3029 4.8999 20.2477 4.8999H3.7477Z
    `,
  };

  const path = fill ? iconData.fill : iconData.outlined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path} fill={color} />
    </svg>
  );
};

export default Desktop;
