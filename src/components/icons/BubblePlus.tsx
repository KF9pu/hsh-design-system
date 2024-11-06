import React, { HtmlHTMLAttributes } from "react";

interface BubblePlusProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
  size?: number;
}

const BubblePlus: React.FC<BubblePlusProps> = ({
  fill,
  color = "#171719",
  size = 24,
  ...rest
}) => {
  const iconData = {
    filled: {
      path1: `
       M12.0006 2.3501C6.67103 2.3501 2.35059 6.67055 2.35059 12.0001C2.35059 17.3296 6.67103 21.6501 12.0006 21.6501C13.5389 21.6501 14.9953 21.2895 16.2877 20.6476L18.0624 21.1317L18.1003 21.142C18.5104 21.2539 18.8762 21.3537 19.1768 21.4067C19.4814 21.4605 19.8674 21.4971 20.2531 21.3499C20.7583 21.157 21.1574 20.7579 21.3504 20.2526C21.4976 19.867 21.461 19.4809 21.4072 19.1763C21.3541 18.8758 21.2543 18.5099 21.1425 18.0998L21.1321 18.062L20.6481 16.2873C21.29 14.9948 21.6506 13.5384 21.6506 12.0001C21.6506 6.67055 17.3301 2.3501 12.0006 2.3501ZM12.9006 11.1001V7.10008H11.1006V11.1001H7.10058V12.9001H11.1006V16.9001H12.9006V12.9001H16.9006V11.1001H12.9006Z
      `,
      path2: undefined,
    },
    outlined: {
      path1: `
        M12.9005 7.99998V7.09998H11.1005V7.99998V11.1H8.00046H7.10046V12.9H8.00046H11.1005V16V16.9H12.9005V16V12.9H16.0005H16.9004V11.1H16.0005H12.9005V7.99998Z
      `,
      path2: `
        M12.0005 4.15C7.66502 4.15 4.15046 7.66456 4.15046 12C4.15046 16.3354 7.66502 19.85 12.0005 19.85C13.3617 19.85 14.6396 19.5043 15.7537 18.8965C15.9578 18.7852 16.1971 18.7571 16.4215 18.8183L18.5359 19.395C18.9957 19.5204 19.2805 19.5971 19.4896 19.634C19.564 19.6472 19.6111 19.6516 19.6375 19.653C19.6434 19.6483 19.6488 19.6429 19.6535 19.637C19.652 19.6106 19.6476 19.5635 19.6345 19.4892C19.5976 19.2801 19.5208 18.9952 19.3954 18.5355L18.8188 16.421C18.7576 16.1967 18.7856 15.9574 18.897 15.7532C19.5047 14.6391 19.8504 13.3613 19.8504 12C19.8504 7.66456 16.3359 4.15 12.0005 4.15ZM2.35046 12C2.35046 6.67045 6.67091 2.35 12.0005 2.35C17.33 2.35 21.6504 6.67045 21.6504 12C21.6504 13.5383 21.2898 14.9947 20.648 16.2872L21.1423 18.0997C21.2542 18.5098 21.354 18.8757 21.4071 19.1762C21.4608 19.4808 21.4975 19.8669 21.3502 20.2525C21.1573 20.7578 20.7582 21.1569 20.253 21.3498C19.8673 21.497 19.4812 21.4604 19.1767 21.4066C18.8761 21.3536 18.5103 21.2538 18.1002 21.1419L16.2876 20.6475C14.9952 21.2894 13.5388 21.65 12.0005 21.65C6.67091 21.65 2.35046 17.3295 2.35046 12Z
      `,
    },
  };

  const { path1, path2 } = fill ? iconData.filled : iconData.outlined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path1} fill={color} />
      {path2 && <path d={path2} fill={color} />}
    </svg>
  );
};

export default BubblePlus;
