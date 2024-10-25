import React from "react";

interface FilterProps {
  fill?: true;
  color?: string;
}

const Filter: React.FC<FilterProps> = ({ fill = false, color = "#171719" }) => {
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
          d="M6.65141 2.60108C6.10433 2.60106 5.63355 2.60104 5.26689 2.63382C4.91628 2.66517 4.45471 2.73757 4.08829 3.04444C3.62863 3.4294 3.37764 4.00874 3.41118 4.60737C3.43792 5.08457 3.7008 5.47081 3.91773 5.74804C4.14459 6.03795 4.46656 6.38136 4.84076 6.78047L9.60007 11.857L9.59992 18.2567C9.59901 18.3167 9.59617 18.5049 9.65185 18.6882C9.6977 18.8392 9.77285 18.9796 9.87302 19.1015C9.99469 19.2495 10.1528 19.3515 10.2033 19.3841L12.2751 20.7651C12.3775 20.8335 12.4997 20.915 12.6103 20.9749C12.7203 21.0346 12.9614 21.1559 13.2716 21.1374C13.6218 21.1165 13.9454 20.9433 14.1571 20.6635C14.3446 20.4157 14.3773 20.1478 14.3887 20.0231C14.4002 19.8979 14.4001 19.751 14.4001 19.6279L14.4001 11.857L19.1592 6.78045C19.5334 6.38137 19.8554 6.03792 20.0822 5.74801C20.2992 5.47078 20.562 5.08454 20.5888 4.60735C20.6223 4.00872 20.3713 3.42939 19.9117 3.04443C19.5452 2.73757 19.0837 2.66517 18.7331 2.63382C18.3664 2.60104 17.8957 2.60106 17.3486 2.60108H6.65141Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.64037 2.59815H17.3599C17.9055 2.59813 18.3752 2.59811 18.7411 2.63084C19.0912 2.66217 19.5518 2.73452 19.9179 3.04069C20.3773 3.42497 20.6287 4.00339 20.5961 4.60148C20.5702 5.07801 20.3088 5.46411 20.0928 5.74145C19.867 6.03129 19.5466 6.37459 19.1743 6.77342L14.9002 11.3529L14.9002 20.1583C14.9002 20.2774 14.9003 20.4212 14.889 20.5442C14.8776 20.6688 14.8449 20.9301 14.6635 21.1743C14.4572 21.452 14.1411 21.6272 13.7963 21.655C13.493 21.6793 13.2541 21.5685 13.1425 21.5122C13.0322 21.4566 12.9103 21.3803 12.8093 21.3171L9.73689 19.3971C9.68389 19.3651 9.5175 19.2647 9.38898 19.1147C9.28323 18.9913 9.20365 18.8477 9.15506 18.6926C9.096 18.5042 9.09902 18.3098 9.09999 18.248L9.10015 11.3529L4.82599 6.77343C4.45372 6.37461 4.13326 6.03128 3.90753 5.74145C3.69153 5.46411 3.43014 5.07801 3.40418 4.60148C3.37161 4.00339 3.62297 3.42497 4.08243 3.04069C4.4485 2.73453 4.90912 2.66217 5.25926 2.63084C5.62515 2.59811 6.09483 2.59813 6.64037 2.59815ZM5.20025 4.51709C5.20163 4.52641 5.20536 4.54256 5.2283 4.56713L10.6581 10.3848C10.8137 10.5515 10.9002 10.7709 10.9002 10.9989V18.002L13.1002 19.377V10.9989C13.1002 10.7709 13.1867 10.5515 13.3422 10.3848L18.7721 4.56714C18.795 4.54256 18.7987 4.52641 18.8001 4.51709C18.8022 4.5032 18.8008 4.48233 18.7907 4.45905C18.7806 4.43577 18.7663 4.42053 18.7547 4.41255C18.7469 4.40719 18.7326 4.3989 18.699 4.3989H5.30141C5.26779 4.3989 5.25344 4.4072 5.24568 4.41255C5.23412 4.42053 5.21981 4.43577 5.20969 4.45905C5.19958 4.48233 5.1982 4.5032 5.20025 4.51709Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Filter;
