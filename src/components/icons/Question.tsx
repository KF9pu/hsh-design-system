import React from "react";

interface QuestionProps {
  color?: string;
}

const Question: React.FC<QuestionProps> = ({ color = "#171719" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2101 4.52053C13.4635 4.16907 12.6349 4.00265 11.8038 4.0337C10.9726 4.06474 10.1601 4.29248 9.44477 4.69975C8.72915 5.1072 8.13131 5.68297 7.71701 6.37811C7.29846 7.08036 7.10053 7.84663 7.10059 8.65219L8.90059 8.65205C8.90055 8.15344 9.01954 7.70849 9.26321 7.29965C9.51112 6.8837 9.87788 6.52446 10.3354 6.26398C10.7932 6.00332 11.3223 5.85293 11.8709 5.83244C12.4196 5.81195 12.9618 5.92235 13.4436 6.14913C13.9251 6.37581 14.3252 6.70853 14.6111 7.10736C14.8966 7.50551 15.0601 7.95748 15.0936 8.41897C15.1272 8.88028 15.0306 9.345 14.8078 9.76962C14.5858 10.1929 14.2436 10.5658 13.8062 10.8462C12.998 11.3412 12.3202 12.008 11.8333 12.7982C11.3444 13.5916 11.0632 14.4851 11.0179 15.4058L11.0168 15.4278V15.93H12.8168V15.4733C12.85 14.8699 13.0361 14.2774 13.3657 13.7425C13.6995 13.2008 14.1725 12.7314 14.7522 12.3776L14.7597 12.373L14.7671 12.3683C15.4603 11.9264 16.0263 11.3215 16.4018 10.6058C16.7776 9.88941 16.9473 9.09045 16.8889 8.28838C16.8306 7.48649 16.5471 6.71841 16.074 6.05853C15.6014 5.39934 14.9571 4.8721 14.2101 4.52053Z"
        fill={color}
      />
      <path
        d="M11.9982 19.9763C12.661 19.9763 13.1982 19.439 13.1982 18.7763C13.1982 18.1135 12.661 17.5763 11.9982 17.5763C11.3355 17.5763 10.7982 18.1135 10.7982 18.7763C10.7982 19.439 11.3355 19.9763 11.9982 19.9763Z"
        fill={color}
      />
    </svg>
  );
};

export default Question;