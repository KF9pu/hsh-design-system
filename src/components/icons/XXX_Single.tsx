import React from "react";

interface XXX_SingleProps {
  fill?: true;
  color?: string;
}

const XXX_Single: React.FC<XXX_SingleProps> = ({
  fill = false,
  color = "#171719",
}) => {
  const iconData = {
    fill: `
      
    `,
    outlined: `

    `,
  };

  const path = fill ? iconData.fill : iconData.outlined;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path} fill={color} />
    </svg>
  );
};

export default XXX_Single;
