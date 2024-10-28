import React, { HtmlHTMLAttributes } from "react";

interface CopyProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const Copy: React.FC<CopyProps> = ({ color = "#171719", ...rest }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.56985 2.10059C4.31553 2.10056 4.07349 2.10054 3.86953 2.1172C3.64712 2.13537 3.39201 2.17776 3.13703 2.30768C2.77952 2.48984 2.48886 2.7805 2.3067 3.13801C2.17678 3.39298 2.1344 3.64809 2.11623 3.8705C2.09956 4.07446 2.09959 4.31651 2.09961 4.57083V15.4303C2.09959 15.6847 2.09956 15.9267 2.11623 16.1307C2.1344 16.3531 2.17678 16.6082 2.3067 16.8632C2.48886 17.2207 2.77952 17.5113 3.13703 17.6935C3.39201 17.8234 3.64712 17.8658 3.86953 17.884C4.07349 17.9006 4.31553 17.9006 4.56985 17.9006H15.4294C15.6837 17.9006 15.9257 17.9006 16.1297 17.884C16.3521 17.8658 16.6072 17.8234 16.8622 17.6935C17.2197 17.5113 17.5104 17.2207 17.6925 16.8632C17.8224 16.6082 17.8648 16.3531 17.883 16.1307C17.8997 15.9267 17.8996 15.6847 17.8996 15.4303V4.57083C17.8996 4.31651 17.8997 4.07446 17.883 3.8705C17.8648 3.64809 17.8224 3.39298 17.6925 3.13801C17.5104 2.7805 17.2197 2.48984 16.8622 2.30768C16.6072 2.17776 16.3521 2.13537 16.1297 2.1172C15.9257 2.10054 15.6837 2.10056 15.4294 2.10059H4.56985ZM3.8996 4.00039C3.8996 3.94516 3.94437 3.90039 3.9996 3.90039H15.9996C16.0548 3.90039 16.0996 3.94516 16.0996 4.00039V16.0004C16.0996 16.0556 16.0548 16.1004 15.9996 16.1004H3.9996C3.94437 16.1004 3.8996 16.0556 3.8996 16.0004V4.00039ZM21.883 20.1311C21.8997 19.9271 21.8997 19.6851 21.8996 19.4307L21.8996 9.00098L20.0997 9.00136V20.0014C20.0997 20.0566 20.0549 20.1014 19.9997 20.1014H8.99965L8.99963 21.901L19.4294 21.901C19.6837 21.901 19.9258 21.901 20.1297 21.8844C20.3521 21.8662 20.6072 21.8238 20.8622 21.6939C21.2197 21.5117 21.5104 21.2211 21.6925 20.8636C21.8225 20.6086 21.8648 20.3535 21.883 20.1311Z"
        fill={color}
      />
    </svg>
  );
};

export default Copy;
