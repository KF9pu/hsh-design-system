import React from "react";

interface TriangleProps {
  fill?: true;
  color?: string;
}

const Triangle: React.FC<TriangleProps> = ({
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
          d="M13.1783 2.85025C12.4282 2.51671 11.5719 2.51671 10.8218 2.85025C10.2991 3.08266 9.92151 3.5085 9.59319 3.97203C9.26779 4.43144 8.90972 5.04995 8.47415 5.80232L2.9797 15.2927C2.5425 16.0479 2.18318 16.6685 1.94608 17.181C1.70695 17.6979 1.52515 18.2389 1.5846 18.8091C1.66987 19.627 2.09841 20.3703 2.76355 20.8539C3.22722 21.191 3.78653 21.3048 4.35366 21.3568C4.91599 21.4084 5.63311 21.4084 6.50569 21.4084H17.4945C18.367 21.4084 19.0842 21.4084 19.6465 21.3568C20.2136 21.3048 20.7729 21.191 21.2366 20.8539C21.9017 20.3703 22.3303 19.627 22.4155 18.8091C22.475 18.2389 22.2932 17.6979 22.0541 17.181C21.817 16.6685 21.4576 16.0479 21.0204 15.2927L15.526 5.80231C15.0904 5.04995 14.7324 4.43144 14.407 3.97203C14.0786 3.5085 13.701 3.08266 13.1783 2.85025Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.1783 2.85025C12.4282 2.51671 11.5719 2.51671 10.8218 2.85025C10.2991 3.08266 9.9215 3.5085 9.59318 3.97203C9.26778 4.43144 8.90971 5.04995 8.47415 5.80232L2.9797 15.2927C2.54249 16.0479 2.18318 16.6685 1.94608 17.181C1.70695 17.6979 1.52515 18.2389 1.5846 18.8091C1.66987 19.627 2.09841 20.3703 2.76355 20.8539C3.22722 21.191 3.78652 21.3048 4.35366 21.3568C4.91599 21.4084 5.63311 21.4084 6.50568 21.4084H17.4944C18.367 21.4084 19.0841 21.4084 19.6465 21.3568C20.2136 21.3048 20.7729 21.191 21.2366 20.8539C21.9017 20.3703 22.3302 19.627 22.4155 18.8091C22.475 18.2389 22.2932 17.6979 22.054 17.181C21.8169 16.6685 21.4576 16.0479 21.0204 15.2927L15.526 5.80231C15.0904 5.04995 14.7323 4.43144 14.4069 3.97203C14.0786 3.5085 13.701 3.08266 13.1783 2.85025ZM12.447 4.49498C12.1625 4.36847 11.8377 4.36847 11.5531 4.49498C11.4827 4.52628 11.3366 4.62487 11.062 5.01244C10.7902 5.39629 10.473 5.94224 10.0096 6.74275L4.55982 16.156C4.09472 16.9593 3.77794 17.5083 3.57972 17.9368C3.3795 18.3696 3.36691 18.5459 3.37489 18.6224C3.40724 18.9327 3.56979 19.2146 3.82208 19.3981C3.88432 19.4433 4.04324 19.5208 4.5181 19.5643C4.98822 19.6075 5.62203 19.6084 6.5503 19.6084H17.4498C18.3781 19.6084 19.0119 19.6075 19.482 19.5643C19.9569 19.5208 20.1158 19.4433 20.178 19.3981C20.4303 19.2146 20.5929 18.9327 20.6252 18.6224C20.6332 18.5459 20.6206 18.3696 20.4204 17.9368C20.2222 17.5083 19.9054 16.9593 19.4403 16.156L13.9905 6.74274C13.5271 5.94223 13.21 5.39629 12.9381 5.01244C12.6636 4.62487 12.5174 4.52628 12.447 4.49498Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Triangle;
