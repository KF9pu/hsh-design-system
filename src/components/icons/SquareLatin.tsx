import React, { HtmlHTMLAttributes } from "react";

interface SquareLatinProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const SquareLatin: React.FC<SquareLatinProps> = ({
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
        d="M9.65683 16.2501H7.9996L11.0398 7.7501H12.9474L15.9996 16.2501H14.3424L13.6211 14.1486H10.3722L9.65683 16.2501ZM10.7895 12.9158H13.2038L12.0294 9.48767H11.9579L10.7895 12.9158Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.61065 2.3501H14.3885C15.4756 2.35009 16.3463 2.35008 17.0501 2.40758C17.7727 2.46663 18.3983 2.59076 18.9741 2.88417C19.8961 3.35395 20.6457 4.10355 21.1155 5.02554C21.4089 5.60139 21.5331 6.22695 21.5921 6.94962C21.6496 7.65339 21.6496 8.52407 21.6496 9.61115V14.3891C21.6496 15.4761 21.6496 16.3468 21.5921 17.0506C21.5331 17.7732 21.4089 18.3988 21.1155 18.9747C20.6457 19.8966 19.8961 20.6462 18.9741 21.116C18.3983 21.4094 17.7727 21.5336 17.0501 21.5926C16.3463 21.6501 15.4756 21.6501 14.3886 21.6501H9.61065C8.52358 21.6501 7.6529 21.6501 6.94912 21.5926C6.22646 21.5336 5.6009 21.4094 5.02505 21.116C4.10306 20.6462 3.35346 19.8966 2.88368 18.9747C2.59027 18.3988 2.46614 17.7732 2.4071 17.0506C2.34959 16.3468 2.3496 15.4761 2.34961 14.389V9.61115C2.3496 8.52407 2.34959 7.65339 2.4071 6.94962C2.46614 6.22695 2.59027 5.60139 2.88368 5.02554C3.35346 4.10355 4.10306 3.35395 5.02505 2.88417C5.6009 2.59076 6.22646 2.46663 6.94912 2.40758C7.6529 2.35008 8.52358 2.35009 9.61065 2.3501ZM7.0957 4.20161C6.48435 4.25156 6.12204 4.34541 5.84224 4.48798C5.25893 4.78519 4.78469 5.25942 4.48749 5.84273C4.34492 6.12253 4.25107 6.48484 4.20112 7.09619C4.15031 7.71805 4.14961 8.51514 4.14961 9.6501V14.3501C4.14961 15.4851 4.15031 16.2821 4.20112 16.904C4.25107 17.5154 4.34492 17.8777 4.48749 18.1575C4.78469 18.7408 5.25893 19.215 5.84224 19.5122C6.12204 19.6548 6.48435 19.7486 7.0957 19.7986C7.71756 19.8494 8.51465 19.8501 9.6496 19.8501H14.3496C15.4846 19.8501 16.2816 19.8494 16.9035 19.7986C17.5149 19.7486 17.8772 19.6548 18.157 19.5122C18.7403 19.215 19.2145 18.7408 19.5117 18.1575C19.6543 17.8777 19.7481 17.5154 19.7981 16.904C19.8489 16.2821 19.8496 15.4851 19.8496 14.3501V9.6501C19.8496 8.51514 19.8489 7.71805 19.7981 7.09619C19.7481 6.48484 19.6543 6.12253 19.5117 5.84273C19.2145 5.25942 18.7403 4.78519 18.157 4.48798C17.8772 4.34541 17.5149 4.25156 16.9035 4.20161C16.2816 4.1508 15.4846 4.1501 14.3496 4.1501H9.6496C8.51465 4.1501 7.71756 4.1508 7.0957 4.20161Z"
        fill={color}
      />
    </svg>
  );
};

export default SquareLatin;
