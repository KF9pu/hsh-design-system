import React, { HtmlHTMLAttributes } from "react";

interface LockOpenProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
}

const LockOpen: React.FC<LockOpenProps> = ({
  fill = false,
  color = "#171719",
  ...rest
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {fill ? (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.89963 6.88895C8.89963 5.26198 10.2635 3.90009 11.9996 3.90009C13.7358 3.90009 15.0996 5.26198 15.0996 6.88895L15.0997 7.50016L16.8997 7.49998L16.8996 6.88895C16.8996 4.22044 14.6817 2.1001 11.9996 2.1001C9.31751 2.1001 7.09963 4.2204 7.09963 6.88895V10.1002H6.56986C6.31555 10.1001 6.07347 10.1001 5.86953 10.1168C5.64712 10.1349 5.39201 10.1773 5.13703 10.3072C4.77952 10.4894 4.48886 10.7801 4.3067 11.1376C4.17678 11.3925 4.1344 11.6477 4.11623 11.8701C4.09956 12.074 4.09959 12.3161 4.09961 12.5704L4.09961 12.6002L4.09961 19.4299C4.09959 19.6842 4.09956 19.9262 4.11623 20.1302C4.1344 20.3526 4.17678 20.6077 4.3067 20.8627C4.48886 21.2202 4.77952 21.5109 5.13703 21.693C5.39201 21.8229 5.64712 21.8653 5.86953 21.8835C6.07349 21.9002 6.31553 21.9001 6.56985 21.9001H17.4294C17.6837 21.9001 17.9257 21.9002 18.1297 21.8835C18.3521 21.8653 18.6072 21.8229 18.8622 21.693C19.2197 21.5109 19.5104 21.2202 19.6925 20.8627C19.8225 20.6077 19.8648 20.3526 19.883 20.1302C19.8997 19.9262 19.8996 19.6842 19.8996 19.4299V12.5704C19.8996 12.3161 19.8997 12.074 19.883 11.8701C19.8648 11.6477 19.8225 11.3925 19.6925 11.1376C19.5104 10.7801 19.2197 10.4894 18.8622 10.3072C18.6072 10.1773 18.3521 10.1349 18.1297 10.1168C17.9258 10.1001 17.6837 10.1001 17.4294 10.1002H8.89963V6.88895Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.89963 6.88898C8.89963 5.26199 10.2635 3.9001 11.9996 3.9001C13.7358 3.9001 15.0996 5.262 15.0996 6.88898L15.0997 7.50019L16.8997 7.50001L16.8996 6.88898C16.8996 4.22045 14.6817 2.1001 11.9996 2.1001C9.31751 2.1001 7.09963 4.22041 7.09963 6.88898V10.1002H6.56986C6.31555 10.1002 6.07347 10.1001 5.86953 10.1168C5.64712 10.135 5.39201 10.1774 5.13703 10.3073C4.77952 10.4894 4.48886 10.7801 4.3067 11.1376C4.17678 11.3926 4.1344 11.6477 4.11623 11.8701C4.09956 12.0741 4.09959 12.3161 4.09961 12.5704L4.09961 12.6002L4.09961 19.43C4.09959 19.6843 4.09956 19.9263 4.11623 20.1303C4.1344 20.3527 4.17678 20.6078 4.3067 20.8628C4.48886 21.2203 4.77952 21.511 5.13703 21.6931C5.39201 21.823 5.64712 21.8654 5.86953 21.8836C6.07349 21.9003 6.31553 21.9002 6.56985 21.9002H17.4294C17.6837 21.9002 17.9257 21.9003 18.1297 21.8836C18.3521 21.8654 18.6072 21.823 18.8622 21.6931C19.2197 21.511 19.5104 21.2203 19.6925 20.8628C19.8224 20.6078 19.8648 20.3527 19.883 20.1303C19.8997 19.9263 19.8996 19.6843 19.8996 19.43V12.5704C19.8996 12.3161 19.8997 12.0741 19.883 11.8701C19.8648 11.6477 19.8224 11.3926 19.6925 11.1376C19.5104 10.7801 19.2197 10.4894 18.8622 10.3073C18.6072 10.1774 18.3521 10.135 18.1297 10.1168C17.9258 10.1001 17.6837 10.1002 17.4294 10.1002H8.89963V6.88898ZM5.99966 11.9C5.94443 11.9 5.89966 11.9448 5.89966 12V20C5.89966 20.0552 5.94443 20.1 5.99966 20.1H17.9997C18.0549 20.1 18.0997 20.0552 18.0997 20V12C18.0997 11.9448 18.0549 11.9 17.9997 11.9H5.99966Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default LockOpen;
