import React from "react";

interface LogoInstagramProps {
  color?: string;
  real?: true;
}

const LogoInstagram: React.FC<LogoInstagramProps> = ({
  color = "#171719",
  real,
}) => {
  return (
    <>
      {real ? (
        <img src="/src/assets/logoInstagram.png" />
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3006 6.84771C18.3006 7.49176 17.7853 8.007 17.1413 8.007C16.4972 8.007 15.982 7.49176 15.982 6.84771C15.982 6.20366 16.4972 5.68842 17.1413 5.68842C17.7853 5.68842 18.3006 6.20366 18.3006 6.84771ZM21.6496 12.0001C21.6496 14.6192 21.6389 14.952 21.5959 15.9825C21.553 17.013 21.3813 17.7107 21.1451 18.3225C20.8982 18.9558 20.5655 19.4925 20.0288 20.0293C19.492 20.566 18.9553 20.8987 18.322 21.1456C17.7102 21.3818 17.0017 21.5428 15.982 21.5964C14.9515 21.6394 14.6187 21.6501 11.9996 21.6501C9.38048 21.6501 9.04772 21.6394 8.01724 21.5964C6.98676 21.5535 6.28904 21.3818 5.6772 21.1456C5.04388 20.8987 4.50717 20.566 3.97047 20.0293C3.43376 19.4925 3.101 18.9558 2.85411 18.3225C2.61796 17.7107 2.45695 17.0022 2.40328 15.9825C2.36034 14.952 2.34961 14.6192 2.34961 12.0001C2.34961 9.38097 2.36034 9.04821 2.40328 8.01773C2.44622 6.98725 2.61796 6.28953 2.85411 5.67769C3.101 5.04437 3.43376 4.50766 3.97047 3.97096C4.50717 3.43425 5.04388 3.10149 5.6772 2.8546C6.28904 2.61845 6.9975 2.45744 8.01724 2.40377C9.04772 2.36083 9.38048 2.3501 11.9996 2.3501C14.6187 2.3501 14.9515 2.36083 15.982 2.40377C17.0125 2.44671 17.7102 2.61845 18.322 2.8546C18.9553 3.10149 19.492 3.43425 20.0288 3.97096C20.5655 4.50766 20.8982 5.04437 21.1451 5.67769C21.3813 6.28953 21.5423 6.99799 21.5959 8.01773C21.6389 9.04821 21.6496 9.38097 21.6496 12.0001ZM19.9107 12.0001C19.9107 9.42391 19.9107 9.11262 19.857 8.09287C19.8141 7.14827 19.6531 6.64376 19.5242 6.30027C19.3525 5.84943 19.1378 5.52741 18.8051 5.19465C18.4723 4.86189 18.1503 4.64721 17.6994 4.47546C17.3559 4.34665 16.8514 4.18564 15.9068 4.1427C14.8871 4.09977 14.5865 4.08903 11.9996 4.08903C9.41268 4.08903 9.11212 4.08903 8.09238 4.1427C7.14777 4.18564 6.64327 4.34665 6.29978 4.47546C5.84894 4.64721 5.52692 4.86189 5.19416 5.19465C4.8614 5.52741 4.64672 5.84943 4.47497 6.30027C4.34616 6.64376 4.18515 7.14827 4.14221 8.09287C4.09928 9.11262 4.08854 9.41317 4.08854 12.0001C4.08854 14.587 4.08854 14.8876 4.14221 15.9073C4.18515 16.8519 4.34616 17.3565 4.47497 17.6999C4.64672 18.1508 4.8614 18.4728 5.19416 18.8056C5.52692 19.1383 5.84894 19.353 6.29978 19.5248C6.64327 19.6536 7.14777 19.8146 8.09238 19.8575C9.11212 19.9004 9.41268 19.9112 11.9996 19.9112C14.5865 19.9112 14.8871 19.9112 15.9068 19.8575C16.8514 19.8146 17.3559 19.6536 17.6994 19.5248C18.1503 19.353 18.4723 19.1383 18.8051 18.8056C19.1378 18.4728 19.3525 18.1508 19.5242 17.6999C19.6531 17.3565 19.8141 16.8519 19.857 15.9073C19.8999 14.8876 19.9107 14.587 19.9107 12.0001ZM16.9481 12.0001C16.9481 14.7373 14.7261 16.9593 11.9889 16.9593C9.25167 16.9593 7.0297 14.7373 7.0297 12.0001C7.0297 9.2629 9.25167 7.04093 11.9889 7.04093C14.7261 7.04093 16.9481 9.2629 16.9481 12.0001ZM15.2091 12.0001C15.2091 10.2182 13.7707 8.77986 11.9889 8.77986C10.207 8.77986 8.76863 10.2182 8.76863 12.0001C8.76863 13.782 10.207 15.2204 11.9889 15.2204C13.7707 15.2204 15.2091 13.782 15.2091 12.0001Z"
            fill={color}
          />
        </svg>
      )}
    </>
  );
};

export default LogoInstagram;
