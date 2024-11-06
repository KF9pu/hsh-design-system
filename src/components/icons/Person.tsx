import React, { HtmlHTMLAttributes } from "react";

interface PersonProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
  size?: number;
}

const Person: React.FC<PersonProps> = ({
  fill = false,
  color = "#171719",
  size = 24,
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {fill ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.32187 7.27788C7.32187 4.69441 9.41618 2.6001 11.9996 2.6001C14.5831 2.6001 16.6774 4.69441 16.6774 7.27788C16.6774 9.86134 14.5831 11.9557 11.9996 11.9557C9.41618 11.9557 7.32187 9.86134 7.32187 7.27788ZM11.9997 13.1011C14.9319 13.1011 17.8051 13.9227 20.3091 15.4424C20.5024 15.5595 20.7365 15.7012 20.9327 15.9266C21.0987 16.1172 21.2346 16.3593 21.311 16.6001C21.4015 16.8857 21.4007 17.176 21.4 17.4189L21.3999 18.9304C21.3999 19.1847 21.3999 19.4268 21.3832 19.6308C21.3651 19.8532 21.3227 20.1083 21.1928 20.3633C21.0106 20.7208 20.7199 21.0114 20.3624 21.1936C20.1075 21.3235 19.8524 21.3659 19.6299 21.3841C19.426 21.4007 19.1839 21.4007 18.9296 21.4007H5.0701C4.81578 21.4007 4.57373 21.4007 4.36977 21.3841C4.14736 21.3659 3.89226 21.3235 3.63728 21.1936C3.27977 21.0114 2.98911 20.7208 2.80695 20.3633C2.67703 20.1083 2.63464 19.8532 2.61647 19.6308C2.59981 19.4268 2.59983 19.1848 2.59986 18.9304L2.59974 17.4187C2.59903 17.1758 2.59818 16.8855 2.68872 16.5999C2.76509 16.3591 2.90107 16.117 3.06699 15.9264C3.26327 15.701 3.49734 15.5593 3.69064 15.4422C6.19461 13.9227 9.06768 13.1011 11.9997 13.1011Z"
          fill={color}
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.12187 7.27788C9.12187 5.68852 10.4103 4.4001 11.9996 4.4001C13.589 4.4001 14.8774 5.68852 14.8774 7.27788C14.8774 8.86723 13.589 10.1557 11.9996 10.1557C10.4103 10.1557 9.12187 8.86723 9.12187 7.27788ZM11.9996 2.6001C9.41618 2.6001 7.32187 4.69441 7.32187 7.27788C7.32187 9.86134 9.41618 11.9557 11.9996 11.9557C14.5831 11.9557 16.6774 9.86134 16.6774 7.27788C16.6774 4.69441 14.5831 2.6001 11.9996 2.6001ZM11.9997 13.1011C14.9319 13.1011 17.8051 13.9227 20.3091 15.4424C20.5024 15.5595 20.7365 15.7012 20.9327 15.9266C21.0987 16.1172 21.2346 16.3593 21.311 16.6001C21.4015 16.8857 21.4007 17.176 21.4 17.4189L21.3999 18.9304C21.3999 19.1847 21.3999 19.4268 21.3832 19.6308C21.3651 19.8532 21.3227 20.1083 21.1928 20.3633C21.0106 20.7208 20.7199 21.0114 20.3624 21.1936C20.1075 21.3235 19.8524 21.3659 19.6299 21.3841C19.426 21.4007 19.1839 21.4007 18.9296 21.4007H5.0701C4.81578 21.4007 4.57373 21.4007 4.36977 21.3841C4.14736 21.3659 3.89226 21.3235 3.63728 21.1936C3.27977 21.0114 2.98911 20.7208 2.80695 20.3633C2.67703 20.1083 2.63464 19.8532 2.61647 19.6308C2.59981 19.4268 2.59983 19.1848 2.59986 18.9304L2.59974 17.4187C2.59903 17.1758 2.59818 16.8855 2.68872 16.5999C2.76509 16.3591 2.90107 16.117 3.06699 15.9264C3.26327 15.701 3.49734 15.5593 3.69064 15.4422C6.19461 13.9227 9.06768 13.1011 11.9997 13.1011ZM4.42199 17.1077C6.61001 15.7105 9.2089 14.9006 11.9997 14.9006C14.7906 14.9006 17.3896 15.7106 19.5777 17.1079C19.5815 17.1103 19.5998 17.1259 19.5998 17.1652V19.5002C19.5998 19.5555 19.5551 19.6002 19.4998 19.6002H4.49982C4.44459 19.6002 4.39982 19.5555 4.39982 19.5002V17.165C4.39982 17.1257 4.41816 17.1102 4.42199 17.1077Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Person;
