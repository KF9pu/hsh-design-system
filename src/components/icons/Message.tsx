import React, { HtmlHTMLAttributes } from "react";

interface MessageProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
  size?: number;
}

const Message: React.FC<MessageProps> = ({
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
          d="M11.9996 2.72021C6.65898 2.72021 2.09961 6.51631 2.09961 11.4512C2.09961 13.6522 3.03016 15.6477 4.52221 17.1655L3.97574 20.2204C3.91395 20.5658 4.05855 20.9156 4.3462 21.1166C4.63384 21.3176 5.01206 21.333 5.31516 21.1562L8.16594 19.4933C9.34801 19.931 10.642 20.1823 11.9996 20.1823C17.3402 20.1823 21.8996 16.3862 21.8996 11.4512C21.8996 6.51631 17.3402 2.72021 11.9996 2.72021ZM7.9996 12.6202C8.55189 12.6202 8.9996 12.1725 8.9996 11.6202C8.9996 11.068 8.55189 10.6202 7.9996 10.6202C7.44732 10.6202 6.9996 11.068 6.9996 11.6202C6.9996 12.1725 7.44732 12.6202 7.9996 12.6202ZM12.9996 11.6202C12.9996 12.1725 12.5519 12.6202 11.9996 12.6202C11.4473 12.6202 10.9996 12.1725 10.9996 11.6202C10.9996 11.068 11.4473 10.6202 11.9996 10.6202C12.5519 10.6202 12.9996 11.068 12.9996 11.6202ZM15.9996 12.6202C16.5519 12.6202 16.9996 12.1725 16.9996 11.6202C16.9996 11.068 16.5519 10.6202 15.9996 10.6202C15.4473 10.6202 14.9996 11.068 14.9996 11.6202C14.9996 12.1725 15.4473 12.6202 15.9996 12.6202Z"
          fill={color}
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9996 2.72021C6.65898 2.72021 2.09961 6.51631 2.09961 11.4512C2.09961 13.6522 3.03016 15.6477 4.52221 17.1655L3.97574 20.2204C3.91395 20.5658 4.05855 20.9156 4.34619 21.1166C4.63383 21.3176 5.01206 21.333 5.31516 21.1562L8.16593 19.4933C9.348 19.931 10.642 20.1823 11.9996 20.1823C17.3402 20.1823 21.8996 16.3862 21.8996 11.4512C21.8996 6.51631 17.3402 2.72021 11.9996 2.72021ZM11.9996 4.52021C7.4092 4.52021 3.89961 7.73792 3.89961 11.4512C3.89961 13.2558 4.71974 14.9272 6.09945 16.1865C6.32765 16.3948 6.43305 16.7056 6.37865 17.0097L6.09058 18.62L7.63578 17.7187C7.87943 17.5765 8.17562 17.5569 8.43593 17.6655C9.52148 18.1186 10.7281 18.3823 11.9996 18.3823C16.59 18.3823 20.0996 15.1646 20.0996 11.4512C20.0996 7.73792 16.59 4.52021 11.9996 4.52021ZM8.9996 11.6202C8.9996 12.1725 8.55189 12.6202 7.9996 12.6202C7.44732 12.6202 6.99961 12.1725 6.99961 11.6202C6.99961 11.0679 7.44732 10.6202 7.9996 10.6202C8.55189 10.6202 8.9996 11.0679 8.9996 11.6202ZM12.9996 11.6202C12.9996 12.1725 12.5519 12.6202 11.9996 12.6202C11.4473 12.6202 10.9996 12.1725 10.9996 11.6202C10.9996 11.0679 11.4473 10.6202 11.9996 10.6202C12.5519 10.6202 12.9996 11.0679 12.9996 11.6202ZM16.9996 11.6202C16.9996 12.1725 16.5519 12.6202 15.9996 12.6202C15.4473 12.6202 14.9996 12.1725 14.9996 11.6202C14.9996 11.0679 15.4473 10.6202 15.9996 10.6202C16.5519 10.6202 16.9996 11.0679 16.9996 11.6202Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Message;
