import React from "react";

interface BookMarkProps {
  fill?: true;
  color?: string;
}

const BookMark: React.FC<BookMarkProps> = ({
  fill = false,
  color = "#171719",
}) => {
  const iconData = {
    filled: `
        M7.36628 2.6001C6.97479 2.60008 6.62827 2.60007 6.34113 2.62353C6.03534 2.64851 5.71849 2.70452 5.41004 2.86169C4.95845 3.09178 4.59129 3.45893 4.3612 3.91052C4.20403 4.21898 4.14802 4.53583 4.12304 4.84161C4.09958 5.12876 4.09959 5.47523 4.09961 5.86672L4.09961 21.5001C4.09961 21.8252 4.27493 22.125 4.55824 22.2844C4.84154 22.4439 5.18881 22.4381 5.46669 22.2694L11.9996 18.303L18.5325 22.2694C18.8104 22.4381 19.1577 22.4439 19.441 22.2844C19.7243 22.125 19.8996 21.8252 19.8996 21.5001L19.8996 5.86676C19.8996 5.4753 19.8996 5.12875 19.8762 4.84161C19.8512 4.53583 19.7952 4.21898 19.638 3.91052C19.4079 3.45893 19.0408 3.09178 18.5892 2.86169C18.2807 2.70452 17.9639 2.64851 17.6581 2.62353C17.371 2.60007 17.0245 2.60008 16.633 2.6001H7.36628Z
      `,
    outlined: `
        M7.36628 2.6001C7.37735 2.6001 7.38846 2.6001 7.39961 2.6001L16.6329 2.6001C17.0245 2.60008 17.3709 2.60006 17.6581 2.62353C17.9639 2.64851 18.2807 2.70452 18.5892 2.86168C19.0408 3.09178 19.4079 3.45893 19.638 3.91052C19.7952 4.21898 19.8512 4.53583 19.8762 4.84161C19.8996 5.12877 19.8996 5.47526 19.8996 5.86676L19.8996 21.5001C19.8996 21.8252 19.7243 22.125 19.441 22.2844C19.1577 22.4439 18.8104 22.4381 18.5325 22.2694L11.9996 18.303L5.46669 22.2694C5.18881 22.4381 4.84154 22.4439 4.55823 22.2844C4.27492 22.125 4.09961 21.8252 4.09961 21.5001V5.9001C4.09961 5.88895 4.09961 5.87784 4.09961 5.86677C4.09959 5.47526 4.09958 5.12877 4.12304 4.84161C4.14802 4.53583 4.20403 4.21898 4.3612 3.91052C4.59129 3.45893 4.95845 3.09178 5.41003 2.86168C5.71849 2.70452 6.03534 2.64851 6.34113 2.62353C6.62828 2.60006 6.97477 2.60008 7.36628 2.6001ZM6.4877 4.41755C6.29323 4.43344 6.23963 4.45917 6.22722 4.4655C6.11432 4.52302 6.02253 4.61481 5.96501 4.72771C5.95868 4.74012 5.93295 4.79372 5.91706 4.98819C5.90031 5.19317 5.89961 5.46521 5.89961 5.9001V19.9008L11.5325 16.4808C11.8195 16.3065 12.1797 16.3065 12.4667 16.4808L18.0996 19.9008V5.9001C18.0996 5.46521 18.0989 5.19317 18.0822 4.98819C18.0663 4.79372 18.0405 4.74012 18.0342 4.72771C17.9767 4.61481 17.8849 4.52302 17.772 4.4655C17.7596 4.45917 17.706 4.43344 17.5115 4.41755C17.3065 4.4008 17.0345 4.4001 16.5996 4.4001H7.39961C6.96472 4.4001 6.69268 4.4008 6.4877 4.41755Z
      `,
  };

  const path = fill ? iconData.filled : iconData.outlined;

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

export default BookMark;
