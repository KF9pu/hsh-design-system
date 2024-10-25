import React from "react";

interface XXX_DoubleProps {
  fill?: true;
  color?: string;
}

const XXX_Double: React.FC<XXX_DoubleProps> = ({
  fill = false,
  color = "#171719",
}) => {
  const iconData = {
    fill: {
      path1: `

      `,
      path2: `

      `,
    },
    outlined: {
      path1: `
      `,

      path2: `

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

export default XXX_Double;
