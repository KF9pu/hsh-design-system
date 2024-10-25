import React from "react";

interface LocationProps {
  fill?: true;
  color?: string;
}

const Location: React.FC<LocationProps> = ({
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
          d="M5.67855 5.05045C7.32699 3.0885 9.66331 2.1001 11.997 2.1001C14.3304 2.1001 16.6571 3.07828 18.3158 5.0508C21.1808 8.45715 20.736 13.4829 17.6546 16.5754L17.6534 16.5765C15.9048 18.3251 13.8926 20.4505 13.0484 21.3422C12.9909 21.403 12.9387 21.458 12.8925 21.5069C12.4073 22.0245 11.5869 22.0245 11.1016 21.5069C11.0554 21.4581 11.0032 21.403 10.9457 21.3422C10.1015 20.4505 8.08927 18.3251 6.34064 16.5765L6.3395 16.5754C3.25886 13.4836 2.81253 8.44765 5.67855 5.05045ZM9.21703 10.3401C9.21703 8.80304 10.46 7.5601 11.997 7.5601C13.5341 7.5601 14.777 8.80304 14.777 10.3401C14.777 11.8772 13.5341 13.1201 11.997 13.1201C10.46 13.1201 9.21703 11.8772 9.21703 10.3401Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.67855 5.05045C7.32698 3.0885 9.6633 2.1001 11.997 2.1001C14.3304 2.1001 16.6571 3.07828 18.3158 5.0508C21.1807 8.45715 20.736 13.4829 17.6546 16.5754L17.6534 16.5765C15.9048 18.3251 13.8926 20.4505 13.0484 21.3422C12.9908 21.403 12.9387 21.458 12.8925 21.5069C12.4073 22.0245 11.5869 22.0245 11.1016 21.5069C11.0554 21.4581 11.0032 21.403 10.9457 21.3422C10.1015 20.4505 8.08926 18.3251 6.34064 16.5765L6.33949 16.5754C3.25886 13.4836 2.81253 8.44765 5.67855 5.05045ZM11.997 3.9001C10.1711 3.9001 8.34769 4.67144 7.05616 6.20897L7.05486 6.21052C4.84178 8.83311 5.13539 12.8162 7.614 15.3043C9.2223 16.9126 11.0466 18.8315 11.997 19.8346C12.9474 18.8315 14.7717 16.9126 16.38 15.3043C18.8581 12.8168 19.1531 8.84287 16.9382 6.2094C15.637 4.66196 13.8236 3.9001 11.997 3.9001ZM11.997 9.3601C11.4541 9.3601 11.017 9.79715 11.017 10.3401C11.017 10.883 11.4541 11.3201 11.997 11.3201C12.54 11.3201 12.977 10.883 12.977 10.3401C12.977 9.79715 12.54 9.3601 11.997 9.3601ZM9.21703 10.3401C9.21703 8.80304 10.46 7.5601 11.997 7.5601C13.5341 7.5601 14.777 8.80304 14.777 10.3401C14.777 11.8772 13.5341 13.1201 11.997 13.1201C10.46 13.1201 9.21703 11.8772 9.21703 10.3401Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Location;
