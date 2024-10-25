import React from "react";

interface PersonsProps {
  fill?: true;
  color?: string;
}

const Persons: React.FC<PersonsProps> = ({
  fill = false,
  color = "#171719",
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {fill ? (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 4.1001C12.8461 4.1001 11.1 5.84619 11.1 8.0001C11.1 10.154 12.8461 11.9001 15 11.9001C17.1539 11.9001 18.9 10.154 18.9 8.0001C18.9 5.84619 17.1539 4.1001 15 4.1001ZM14.9999 13.6C12.914 13.6 10.9849 14.162 9.55091 15.118C8.12325 16.0698 7.09989 17.4835 7.09989 19.1667L7.09987 19.1838C7.0998 19.2413 7.09969 19.3198 7.10617 19.3938C7.17595 20.1915 7.80839 20.8239 8.60608 20.8937C8.68006 20.9002 8.75856 20.9001 8.81606 20.9L8.83322 20.9H21.1666L21.1837 20.9C21.2412 20.9001 21.3197 20.9002 21.3937 20.8937C22.1914 20.8239 22.8238 20.1915 22.8936 19.3938C22.9001 19.3198 22.9 19.2413 22.8999 19.1838L22.8999 19.1667C22.8999 17.4835 21.8765 16.0698 20.4489 15.118C19.0149 14.162 17.0858 13.6 14.9999 13.6ZM5.29996 19.1667C5.29996 17.5554 5.93844 16.1839 6.86747 15.1011C5.38403 15.1241 4.00601 15.5335 2.96485 16.2276C1.89912 16.938 1.09961 18.0184 1.09961 19.3334C1.09961 20.1985 1.80092 20.8999 2.66603 20.8999H5.71961C5.49796 20.4932 5.3556 20.0366 5.31309 19.5507C5.29862 19.3853 5.29967 19.2162 5.29993 19.1745L5.29996 19.1667ZM3.59972 10C3.59972 8.39837 4.8981 7.1 6.49972 7.1C8.10135 7.1 9.39972 8.39837 9.39972 10C9.39972 11.6016 8.10135 12.9 6.49972 12.9C4.8981 12.9 3.59972 11.6016 3.59972 10Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.0001 5.9001C13.8403 5.9001 12.9001 6.8403 12.9001 8.0001C12.9001 9.1599 13.8403 10.1001 15.0001 10.1001C16.1599 10.1001 17.1001 9.1599 17.1001 8.0001C17.1001 6.8403 16.1599 5.9001 15.0001 5.9001ZM11.1001 8.0001C11.1001 5.84619 12.8461 4.1001 15.0001 4.1001C17.154 4.1001 18.9001 5.84619 18.9001 8.0001C18.9001 10.154 17.154 11.9001 15.0001 11.9001C12.8461 11.9001 11.1001 10.154 11.1001 8.0001ZM10.5494 16.1157C9.44359 16.8529 8.89995 17.7725 8.89995 18.6667C8.89995 18.8105 8.89904 18.9544 8.90176 19.0982C12.8671 19.1733 16.8343 19.1 20.7999 19.1C20.8993 19.1 20.9988 19.1001 21.0981 19.0982C21.1009 18.9544 21.0999 18.8105 21.0999 18.6667C21.0999 17.7725 20.5563 16.8529 19.4505 16.1157C18.3509 15.3826 16.78 14.9 14.9999 14.9C13.2199 14.9 11.649 15.3826 10.5494 16.1157ZM9.55097 14.618C10.9849 13.662 12.9141 13.1 14.9999 13.1C17.0858 13.1 19.015 13.662 20.4489 14.618C21.8766 15.5698 22.8999 16.9835 22.8999 18.6667C22.9 18.8996 22.9057 19.1336 22.8867 19.3659C22.872 19.5466 22.8364 19.7708 22.7201 19.9991C22.5619 20.3096 22.3095 20.562 21.999 20.7202C21.7708 20.8365 21.5466 20.872 21.3658 20.8868C21.2034 20.9001 21.0134 20.9 20.8267 20.9H9.17317C8.98652 20.9 8.7965 20.9001 8.63406 20.8868C8.45334 20.872 8.2291 20.8365 8.00086 20.7202C7.6904 20.562 7.43798 20.3096 7.27979 19.9991C7.1635 19.7708 7.12792 19.5466 7.11316 19.3659C7.09417 19.1336 7.09994 18.8996 7.09995 18.6667C7.09995 16.9835 8.12332 15.5698 9.55097 14.618ZM2.96494 15.7276C4.00607 15.0335 5.38403 14.6242 6.86741 14.6012C6.38134 15.1677 5.97481 15.8132 5.69765 16.5308C5.01777 16.6716 4.42526 16.9174 3.9634 17.2253C3.21948 17.7212 2.8997 18.3076 2.8997 18.8335C2.8997 18.9218 2.89959 19.0102 2.90105 19.0986C3.70103 19.1118 4.50121 19.0999 5.30123 19.0999C5.30318 19.2303 5.3079 19.375 5.31914 19.5125C5.343 19.8045 5.40884 20.292 5.67598 20.8163C5.6903 20.8444 5.70499 20.8723 5.72005 20.8999L3.1414 20.8999C2.9688 20.8999 2.79299 20.9 2.64243 20.8886C2.4753 20.8759 2.26744 20.8455 2.05277 20.7455C1.70089 20.5815 1.41809 20.2987 1.25412 19.9468C1.15408 19.7322 1.12369 19.5243 1.11104 19.3572C1.09786 19.183 1.09969 19.008 1.0997 18.8335C1.0997 17.5185 1.89921 16.4381 2.96494 15.7276ZM5.39983 10C5.39983 9.39249 5.89231 8.9 6.49983 8.9C7.10734 8.9 7.59983 9.39249 7.59983 10C7.59983 10.6075 7.10734 11.1 6.49983 11.1C5.89231 11.1 5.39983 10.6075 5.39983 10ZM6.49983 7.1C4.8982 7.1 3.59983 8.39837 3.59983 10C3.59983 11.6016 4.8982 12.9 6.49983 12.9C8.10145 12.9 9.39983 11.6016 9.39983 10C9.39983 8.39837 8.10145 7.1 6.49983 7.1Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Persons;