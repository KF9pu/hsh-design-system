import React from "react";

interface ChevronProps {
  thick?: true;
  small?: true;
  color?: string;
  up?: true;
  left?: true;
  right?: true;
}

const Chevron: React.FC<ChevronProps> = ({
  thick,
  small,
  up,
  left,
  right,
  color = "#171719",
}) => {
  const renderIcon = (pathData: string) => (
    <svg
      style={{
        rotate: up ? "180deg" : left ? "90deg" : right ? "270deg" : "",
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d={pathData} fill={color} />
    </svg>
  );

  const thickSmallPath = `
    M4.08096 8.08096C4.58864 7.57327 5.41175 7.57327 5.91943 8.08096L12.0002 14.1617L18.081 8.08096C18.5886 7.57327 19.4118 7.57327 19.9194 8.08096C20.4271 8.58864 20.4271 9.41175 19.9194 9.91943L12.9194 16.9194C12.4118 17.4271 11.5886 17.4271 11.081 16.9194L4.08096 9.91943C3.57327 9.41175 3.57327 8.58864 4.08096 8.08096Z
  `;

  const thickPath = `
    M3.08096 7.58096C3.58864 7.07327 4.41175 7.07327 4.91943 7.58096L12.0002 14.6617L19.0809 7.58096C19.5886 7.07327 20.4117 7.07327 20.9194 7.58096C21.4271 8.08864 21.4271 8.91175 20.9194 9.41943L12.9194 17.4194C12.4117 17.9271 11.5886 17.9271 11.0809 17.4194L3.08096 9.41943C2.57328 8.91175 2.57328 8.08864 3.08096 7.58096Z
  `;

  const smallPath = `
    M4.36321 8.36321C4.71469 8.01174 5.28453 8.01174 5.63601 8.36321L11.9996 14.7268L18.3632 8.36321C18.7147 8.01174 19.2845 8.01174 19.636 8.36321C19.9875 8.71469 19.9875 9.28453 19.636 9.63601L12.636 16.636C12.2845 16.9875 11.7147 16.9875 11.3632 16.636L4.36321 9.63601C4.01174 9.28453 4.01174 8.71469 4.36321 8.36321Z
  `;

  const normalPath = `
    M3.36321 7.36321C3.71468 7.01174 4.28453 7.01174 4.636 7.36321L11.9996 14.7268L19.3632 7.36321C19.7147 7.01174 20.2845 7.01174 20.636 7.36321C20.9875 7.71469 20.9875 8.28453 20.636 8.63601L12.636 16.636C12.2845 16.9875 11.7147 16.9875 11.3632 16.636L3.36321 8.63601C3.01174 8.28453 3.01174 7.71469 3.36321 7.36321Z
  `;

  if (thick) {
    return small ? renderIcon(thickSmallPath) : renderIcon(thickPath);
  } else {
    return small ? renderIcon(smallPath) : renderIcon(normalPath);
  }
};

export default Chevron;
