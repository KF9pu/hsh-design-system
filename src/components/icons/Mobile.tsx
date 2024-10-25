import React from "react";

interface MobileProps {
  fill?: true;
  color?: string;
}

const Mobile: React.FC<MobileProps> = ({ fill = false, color = "#171719" }) => {
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
          d="M9.9142 1.85059H9.94961H14.0496H14.085H14.085H14.0851C14.6149 1.85057 15.0661 1.85056 15.4365 1.88083C15.8256 1.91262 16.2042 1.98226 16.5662 2.16667C17.1118 2.4447 17.5555 2.88835 17.8335 3.43402C18.0179 3.79595 18.0876 4.17454 18.1194 4.5637C18.1496 4.93413 18.1496 5.38531 18.1496 5.91518V5.95059V18.0506V18.086C18.1496 18.6159 18.1496 19.067 18.1194 19.4375C18.0876 19.8266 18.0179 20.2052 17.8335 20.5672C17.5555 21.1128 17.1118 21.5565 16.5662 21.8345C16.2042 22.0189 15.8256 22.0886 15.4365 22.1203C15.0661 22.1506 14.6149 22.1506 14.085 22.1506H14.085H14.085H14.0496H9.94961H9.9142H9.91418H9.91416C9.38431 22.1506 8.93315 22.1506 8.56272 22.1203C8.17356 22.0886 7.79497 22.0189 7.43304 21.8345C6.88737 21.5565 6.44373 21.1128 6.16569 20.5672C5.98128 20.2052 5.91164 19.8266 5.87985 19.4375C5.84958 19.0671 5.8496 18.6159 5.84961 18.086V18.086V18.086V18.0506V5.95059V5.91519V5.91516V5.91513C5.8496 5.38528 5.84958 4.93412 5.87985 4.5637C5.91164 4.17454 5.98128 3.79595 6.16569 3.43402C6.44373 2.88835 6.88737 2.4447 7.43304 2.16667C7.79497 1.98226 8.17356 1.91262 8.56272 1.88083C8.93314 1.85056 9.3843 1.85057 9.91415 1.85059H9.91418H9.9142ZM9.99975 18.325C9.62696 18.325 9.32475 18.6272 9.32475 19C9.32475 19.3728 9.62696 19.675 9.99975 19.675H13.9998C14.3725 19.675 14.6747 19.3728 14.6747 19C14.6747 18.6272 14.3725 18.325 13.9998 18.325H9.99975Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.95059 1.85059H9.91518H9.91516C9.3853 1.85057 8.93413 1.85056 8.5637 1.88083C8.17454 1.91262 7.79595 1.98225 7.43402 2.16667C6.88835 2.4447 6.4447 2.88835 6.16667 3.43402C5.98225 3.79595 5.91262 4.17454 5.88083 4.5637C5.85056 4.93413 5.85057 5.3853 5.85059 5.91516V5.91519V5.95059V18.0506V18.086V18.086C5.85057 18.6159 5.85056 19.067 5.88083 19.4375C5.91262 19.8266 5.98225 20.2052 6.16667 20.5672C6.4447 21.1128 6.88835 21.5565 7.43402 21.8345C7.79595 22.0189 8.17454 22.0886 8.5637 22.1203C8.93413 22.1506 9.3853 22.1506 9.91516 22.1506H9.91518H9.95059H14.0506H14.086H14.086C14.6159 22.1506 15.067 22.1506 15.4375 22.1203C15.8266 22.0886 16.2052 22.0189 16.5672 21.8345C17.1128 21.5565 17.5565 21.1128 17.8345 20.5672C18.0189 20.2052 18.0886 19.8266 18.1203 19.4375C18.1506 19.067 18.1506 18.6159 18.1506 18.086V18.0506V5.95059V5.91518C18.1506 5.38531 18.1506 4.93413 18.1203 4.5637C18.0886 4.17454 18.0189 3.79595 17.8345 3.43402C17.5565 2.88835 17.1128 2.4447 16.5672 2.16667C16.2052 1.98225 15.8266 1.91262 15.4375 1.88083C15.067 1.85056 14.6159 1.85057 14.086 1.85059H14.086H14.0506H9.95059ZM8.2512 3.77048C8.31709 3.73691 8.43243 3.69755 8.71028 3.67485C8.99863 3.65129 9.37568 3.65059 9.95059 3.65059H14.0506C14.6255 3.65059 15.0025 3.65129 15.2909 3.67485C15.5687 3.69755 15.6841 3.73691 15.75 3.77048C15.957 3.87594 16.1252 4.04422 16.2307 4.2512C16.2643 4.31709 16.3036 4.43243 16.3263 4.71028C16.3499 4.99863 16.3506 5.37568 16.3506 5.95059V18.0506C16.3506 18.6255 16.3499 19.0025 16.3263 19.2909C16.3036 19.5687 16.2643 19.6841 16.2307 19.75C16.1252 19.957 15.957 20.1252 15.75 20.2307C15.6841 20.2643 15.5687 20.3036 15.2909 20.3263C15.0025 20.3499 14.6255 20.3506 14.0506 20.3506H9.95059C9.37568 20.3506 8.99863 20.3499 8.71028 20.3263C8.43243 20.3036 8.31709 20.2643 8.2512 20.2307C8.04422 20.1252 7.87594 19.957 7.77048 19.75C7.73691 19.6841 7.69755 19.5687 7.67485 19.2909C7.65129 19.0025 7.65059 18.6255 7.65059 18.0506V5.95059C7.65059 5.37568 7.65129 4.99863 7.67485 4.71028C7.69755 4.43243 7.73691 4.31709 7.77048 4.2512C7.87594 4.04422 8.04422 3.87594 8.2512 3.77048ZM10.0005 17.8248C9.62775 17.8248 9.32554 18.127 9.32554 18.4998C9.32554 18.8726 9.62775 19.1748 10.0005 19.1748H14.0005C14.3733 19.1748 14.6755 18.8726 14.6755 18.4998C14.6755 18.127 14.3733 17.8248 14.0005 17.8248H10.0005Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Mobile;
