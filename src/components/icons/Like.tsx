import React, { HtmlHTMLAttributes } from "react";

interface LikeProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
}

const Like: React.FC<LikeProps> = ({
  fill = false,
  color = "#171719",
  ...rest
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {fill ? (
        <>
          <path
            d="M14.4299 4.57789C14.4299 3.25711 13.359 2.18994 12.0405 2.18994C11.0617 2.18994 10.1818 2.78693 9.82017 3.69648L7.02989 10.7138V21.8052L18.1349 21.8052C18.3513 21.8052 18.5604 21.8052 18.7387 21.7918C18.9356 21.7769 19.1584 21.7425 19.3874 21.6403C19.7131 21.495 19.9914 21.2609 20.1903 20.9648C20.3302 20.7567 20.4022 20.5431 20.4505 20.3517C20.4943 20.1783 20.5301 19.9723 20.5671 19.7591L21.618 13.71C21.7242 13.0985 21.8138 12.5829 21.8501 12.1589C21.8879 11.7177 21.8789 11.2795 21.7216 10.8499C21.4876 10.2106 21.0362 9.67395 20.4464 9.334C20.05 9.10554 19.6199 9.02162 19.1787 8.98334C18.7547 8.94654 18.2314 8.94656 17.6107 8.94657L14.4299 8.94657V4.57789Z"
            fill={color}
          />
          <path
            d="M5.22989 21.8052V10.8018L3.80779 10.8018C3.68755 10.8017 3.54924 10.8017 3.4282 10.8116C3.28917 10.8229 3.0958 10.8517 2.89431 10.9544C2.63088 11.0886 2.41671 11.3028 2.28248 11.5662C2.17981 11.7677 2.15105 11.961 2.13969 12.1001C2.1298 12.2211 2.12985 12.3594 2.12989 12.4797L2.1299 20.1273C2.12986 20.2475 2.12981 20.3858 2.1397 20.5069C2.15106 20.6459 2.17982 20.8393 2.28249 21.0408C2.41671 21.3042 2.63089 21.5183 2.89431 21.6526C3.09581 21.7552 3.28918 21.784 3.42821 21.7954C3.54923 21.8052 3.6875 21.8052 3.80773 21.8052H5.22989Z"
            fill={color}
          />
        </>
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.0405 3.98994C11.799 3.98994 11.582 4.1372 11.4928 4.36157L8.50558 11.8741V20.0052H18.1085C18.3612 20.0052 18.5011 20.0046 18.6034 19.9969C18.6351 19.9945 18.655 19.9918 18.6661 19.9901C18.6742 19.985 18.6815 19.9789 18.6879 19.9717C18.6915 19.9611 18.6975 19.942 18.7053 19.9112C18.7304 19.8117 18.7549 19.674 18.7982 19.425L19.8379 13.4402C19.9525 12.7802 20.0278 12.3421 20.0567 12.0052C20.0848 11.6766 20.0579 11.5414 20.0312 11.4685C19.9425 11.226 19.7713 11.0225 19.5475 10.8935C19.4803 10.8548 19.3517 10.8051 19.0231 10.7766C18.6862 10.7474 18.2417 10.7466 17.5718 10.7466H14.3299C14.3226 10.7466 14.3152 10.7466 14.3078 10.7466C14.1875 10.7466 14.0492 10.7467 13.9282 10.7368C13.7892 10.7254 13.5958 10.6966 13.3943 10.594C13.1309 10.4598 12.9167 10.2456 12.7825 9.98216C12.6799 9.78093 12.6511 9.58789 12.6397 9.44874C12.6298 9.32782 12.6298 9.18974 12.6299 9.06989C12.6299 9.06246 12.6299 9.05509 12.6299 9.0478V4.57789C12.6299 4.25352 12.3671 3.98994 12.0405 3.98994ZM12.0405 2.18994C13.359 2.18994 14.4299 3.25711 14.4299 4.57789V8.94657L17.6106 8.94657C18.2314 8.94656 18.7547 8.94654 19.1787 8.98334C19.6199 9.02162 20.05 9.10554 20.4463 9.334C21.0362 9.67395 21.4876 10.2106 21.7216 10.8499C21.8788 11.2795 21.8879 11.7177 21.8501 12.1589C21.8138 12.5829 21.7242 13.0985 21.618 13.71L20.5671 19.7591C20.5301 19.9723 20.4943 20.1783 20.4505 20.3517C20.4022 20.5431 20.3301 20.7567 20.1903 20.9648C19.9913 21.2609 19.7131 21.495 19.3873 21.6403C19.1583 21.7425 18.9355 21.7769 18.7387 21.7918C18.5604 21.8052 18.3513 21.8052 18.1349 21.8052L3.80779 21.8052C3.68755 21.8052 3.54925 21.8053 3.42821 21.7954C3.28918 21.784 3.09581 21.7552 2.89431 21.6526C2.63089 21.5183 2.41671 21.3042 2.28249 21.0408C2.17982 20.8393 2.15106 20.6459 2.1397 20.5069C2.12981 20.3858 2.12986 20.2475 2.1299 20.1273L2.12989 12.5018C2.12989 12.4945 2.12989 12.4871 2.12989 12.4797C2.12985 12.3594 2.1298 12.2211 2.13969 12.1001C2.15105 11.961 2.17981 11.7677 2.28248 11.5662C2.4167 11.3028 2.63088 11.0886 2.8943 10.9544C3.0958 10.8517 3.28917 10.8229 3.4282 10.8116C3.54924 10.8017 3.68755 10.8017 3.80779 10.8018C3.81523 10.8018 3.8226 10.8018 3.82989 10.8018H6.99491L9.82017 3.69648C10.1818 2.78693 11.0617 2.18994 12.0405 2.18994ZM6.70558 12.6018H3.92989L3.9299 20.0052H6.70558V12.6018Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Like;
