import React, { HtmlHTMLAttributes } from "react";

interface ChevronTightProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  thick?: true;
  small?: true;
  color?: string;
  size?: number;
  up?: true;
  down?: true;
  right?: true;
}

const ChevronTight: React.FC<ChevronTightProps> = ({
  thick,
  small,
  up,
  down,
  right,
  color = "#171719",
  size = 24,
  ...rest
}) => {
  const getRotation = () => {
    if (up) return "90deg";
    if (right) return "180deg";
    if (down) return "270deg";
    return "0deg";
  };

  const renderIcon = (pathData: string) => (
    <svg
      style={{ transform: `rotate(${getRotation()})` }}
      width="12"
      height={size}
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={pathData} fill={color} />
    </svg>
  );

  const pathData = {
    thick: {
      small: `
        M9.41943 4.58096C9.92712 5.08864 9.92712 5.91175 9.41943 6.41943L3.83867 12.0002L9.41943 17.581C9.92712 18.0886 9.92712 18.9118 9.41943 19.4194C8.91175 19.9271 8.08864 19.9271 7.58096 19.4194L1.08096 12.9194C0.573275 12.4118 0.573275 11.5886 1.08096 11.081L7.58096 4.58096C8.08864 4.07327 8.91175 4.07327 9.41943 4.58096Z
      `,
      normal: `
        M10.4194 3.07998C10.9271 3.58766 10.9271 4.41078 10.4194 4.91846L3.33867 11.9992L10.4194 19.08C10.9271 19.5877 10.9271 20.4108 10.4194 20.9185C9.91175 21.4261 9.08864 21.4261 8.58096 20.9185L0.580956 12.9185C0.0732751 12.4108 0.0732751 11.5877 0.580956 11.08L8.58096 3.07998C9.08864 2.5723 9.91175 2.5723 10.4194 3.07998Z
      `,
    },
    normal: {
      small: `
        M9.13601 4.8637C9.48748 5.21517 9.48748 5.78502 9.13601 6.13649L3.2724 12.0001L9.13601 17.8637C9.48748 18.2152 9.48748 18.785 9.13601 19.1365C8.78453 19.488 8.21468 19.488 7.86321 19.1365L1.36321 12.6365C1.01174 12.285 1.01174 11.7152 1.36321 11.3637L7.86321 4.8637C8.21469 4.51223 8.78453 4.51223 9.13601 4.8637Z
      `,
      normal: `
        M10.136 3.36272C10.4875 3.7142 10.4875 4.28405 10.136 4.63552L2.7724 11.9991L10.136 19.3627C10.4875 19.7142 10.4875 20.284 10.136 20.6355C9.78453 20.987 9.21469 20.987 8.86321 20.6355L0.863213 12.6355C0.511741 12.284 0.511741 11.7142 0.863213 11.3627L8.86321 3.36272C9.21469 3.01125 9.78453 3.01125 10.136 3.36272Z
      `,
    },
  };

  const iconType = thick ? "thick" : "normal";
  const iconSize = small ? "small" : "normal";
  const selectedPath = pathData[iconType][iconSize];

  return renderIcon(selectedPath);
};

export default ChevronTight;
