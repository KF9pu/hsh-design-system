import React from "react";

interface BubbleProps {
  fill?: true;
  color?: string;
}

const Bubble: React.FC<BubbleProps> = ({ fill = false, color = "#171719" }) => {
  const iconData = {
    filled:
      "M2.35059 12.0001C2.35059 6.67055 6.67103 2.3501 12.0006 2.3501C17.3301 2.3501 21.6506 6.67055 21.6506 12.0001C21.6506 13.5384 21.29 14.9948 20.6481 16.2873L21.1425 18.0998C21.2543 18.5099 21.3541 18.8758 21.4072 19.1763C21.461 19.4809 21.4976 19.867 21.3504 20.2526C21.1574 20.7579 20.7583 21.157 20.2531 21.3499C19.8674 21.4971 19.4814 21.4605 19.1768 21.4067C18.8762 21.3537 18.5104 21.2539 18.1003 21.142L16.2877 20.6476C14.9953 21.2895 13.5389 21.6501 12.0006 21.6501C6.67103 21.6501 2.35059 17.3296 2.35059 12.0001Z",
    outlined:
      "M12.0006 4.1501C7.66515 4.1501 4.15058 7.66466 4.15058 12.0001C4.15058 16.3355 7.66515 19.8501 12.0006 19.8501C13.3619 19.8501 14.6397 19.5044 15.7538 18.8966C15.9579 18.7853 16.1972 18.7572 16.4216 18.8184L18.536 19.3951C18.9958 19.5205 19.2806 19.5972 19.4898 19.6341C19.5641 19.6473 19.6112 19.6517 19.6376 19.6531C19.6435 19.6484 19.6489 19.643 19.6536 19.6371C19.6522 19.6107 19.6477 19.5636 19.6346 19.4893C19.5977 19.2802 19.5209 18.9953 19.3956 18.5356L18.8189 16.4211C18.7577 16.1968 18.7857 15.9575 18.8971 15.7533C19.5048 14.6392 19.8506 13.3614 19.8506 12.0001C19.8506 7.66466 16.336 4.1501 12.0006 4.1501ZM2.35059 12.0001C2.35059 6.67055 6.67103 2.3501 12.0006 2.3501C17.3301 2.3501 21.6506 6.67055 21.6506 12.0001C21.6506 13.5384 21.29 14.9948 20.6481 16.2873L21.1425 18.0998C21.2543 18.5099 21.3541 18.8758 21.4072 19.1763C21.461 19.4809 21.4976 19.867 21.3504 20.2526C21.1574 20.7579 20.7583 21.157 20.2531 21.3499C19.8674 21.4971 19.4814 21.4605 19.1768 21.4067C18.8762 21.3537 18.5104 21.2539 18.1003 21.142L16.2877 20.6476C14.9953 21.2895 13.5389 21.6501 12.0006 21.6501C6.67103 21.6501 2.35059 17.3296 2.35059 12.0001Z",
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

export default Bubble;