import React, { HtmlHTMLAttributes } from "react";

interface HistoryProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const History: React.FC<HistoryProps> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.09961 12.0001C2.09961 11.6732 2.11549 11.3497 2.14656 11.0304L3.93809 11.2048C3.91265 11.4662 3.89961 11.7315 3.89961 12.0001C3.89961 16.4736 7.5261 20.1001 11.9996 20.1001C16.4731 20.1001 20.0996 16.4736 20.0996 12.0001C20.0996 7.52659 16.4731 3.9001 11.9996 3.9001C11.731 3.9001 11.4657 3.91314 11.2043 3.93858L11.0299 2.14705C11.3492 2.11597 11.6727 2.1001 11.9996 2.1001C17.4672 2.1001 21.8996 6.53248 21.8996 12.0001C21.8996 17.4677 17.4672 21.9001 11.9996 21.9001C6.53199 21.9001 2.09961 17.4677 2.09961 12.0001ZM9.1252 2.52408C8.49859 2.71392 7.89837 2.96413 7.33134 3.26784L8.18122 4.85457C8.64488 4.60623 9.13535 4.40181 9.64712 4.24675L9.1252 2.52408ZM5.71864 4.34735C5.21789 4.75877 4.75828 5.21838 4.34686 5.71913L5.73764 6.86181C6.07464 6.45164 6.45116 6.07513 6.86133 5.73813L5.71864 4.34735ZM3.26736 7.33183C2.96365 7.89886 2.71344 8.49908 2.52359 9.12569L4.24626 9.64761C4.40132 9.13584 4.60574 8.64537 4.85408 8.18171L3.26736 7.33183ZM10.5996 7.5001V13.0001V13.356L10.8431 13.6157L13.8431 16.8156L15.1562 15.5845L12.3996 12.6442V7.5001H10.5996Z"
        fill={color}
      />
    </svg>
  );
};

export default History;
