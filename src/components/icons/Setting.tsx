import React, { HtmlHTMLAttributes } from "react";

interface SettingProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const Setting: React.FC<SettingProps> = ({
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
        d="M9.60778 2.06598C10.3772 1.89188 11.1781 1.80005 11.9999 1.80005C12.8218 1.80005 13.6228 1.89189 14.3922 2.06602C15.2887 2.26892 15.7252 3.04156 15.8959 3.5863C16.0283 4.00862 16.3215 4.39156 16.7622 4.63795C17.1751 4.86876 17.6403 4.93627 18.0795 4.85862C18.6449 4.75866 19.5006 4.8065 20.0797 5.48293C20.8158 6.34285 21.4103 7.32366 21.8262 8.39167C22.2104 9.37802 21.6423 10.2547 21.1699 10.6941C20.8083 11.0304 20.5921 11.4932 20.5921 12C20.5921 12.5068 20.8083 12.9697 21.1699 13.306C21.6423 13.7453 22.2104 14.622 21.8263 15.6084C21.4104 16.6761 20.8162 17.6566 20.0804 18.5164C19.5012 19.193 18.6452 19.2408 18.0798 19.1408C17.6405 19.063 17.1751 19.1305 16.7622 19.3614C16.3213 19.6078 16.0281 19.9909 15.8958 20.4134C15.7251 20.9583 15.2887 21.7312 14.3918 21.9342C13.6225 22.1082 12.8216 22.2001 11.9999 22.2001C11.1781 22.2001 10.3772 22.1082 9.60781 21.9341C8.71122 21.7312 8.27476 20.9586 8.10402 20.4138C7.97164 19.9915 7.67846 19.6085 7.23773 19.3621C6.82485 19.1313 6.35959 19.0638 5.92034 19.1415C5.35498 19.2415 4.49919 19.1936 3.92012 18.5172C3.18402 17.6573 2.58956 16.6765 2.17359 15.6085C1.78939 14.6221 2.35755 13.7454 2.82999 13.306C3.19159 12.9697 3.40788 12.5069 3.40788 12C3.40788 11.4932 3.1916 11.0303 2.83 10.694C2.35756 10.2547 1.7894 9.37792 2.17361 8.39152C2.58956 7.32361 3.18398 6.34287 3.92004 5.48301C4.49911 4.80653 5.35492 4.75872 5.92029 4.8587C6.35954 4.93638 6.82481 4.86887 7.23769 4.63805C7.67843 4.39165 7.97162 4.00869 8.10399 3.58634C8.27473 3.04157 8.71118 2.26888 9.60778 2.06598ZM10.0439 3.91534C10.0404 3.91866 10.0354 3.92381 10.0289 3.93142C9.99568 3.97031 9.95141 4.04487 9.91703 4.15458C9.64171 5.033 9.03579 5.80957 8.16485 6.29647C7.35277 6.75047 6.44053 6.88018 5.58942 6.72967C5.48803 6.71174 5.41115 6.71705 5.36817 6.72735C5.36105 6.72906 5.35578 6.73063 5.35206 6.73189C4.76164 7.42453 4.28633 8.20959 3.9524 9.05977C3.95367 9.06422 3.95557 9.07012 3.95841 9.07766C3.97891 9.13202 4.03157 9.21684 4.12394 9.30274C4.84826 9.97638 5.30788 10.9338 5.30788 12C5.30788 13.0663 4.84826 14.0237 4.12392 14.6973C4.03156 14.7832 3.97889 14.868 3.9584 14.9224C3.95556 14.9299 3.95365 14.9358 3.95238 14.9403C4.28633 15.7905 4.76167 16.5756 5.35213 17.2683C5.35585 17.2695 5.36112 17.2711 5.36823 17.2728C5.41121 17.2831 5.48809 17.2884 5.58948 17.2705C6.44058 17.12 7.35282 17.2497 8.16489 17.7037C9.03581 18.1906 9.64173 18.9671 9.91705 19.8455C9.95143 19.9552 9.9957 20.0298 10.0289 20.0687C10.0354 20.0763 10.0404 20.0814 10.044 20.0848C10.6714 20.2254 11.326 20.3 11.9999 20.3C12.6738 20.3 13.3283 20.2255 13.9557 20.0848C13.9592 20.0815 13.9643 20.0763 13.9708 20.0687C14.004 20.0298 14.0483 19.9552 14.0826 19.8455C14.3578 18.9668 14.9638 18.19 15.835 17.7029C16.6472 17.2489 17.5596 17.1192 18.4108 17.2698C18.5122 17.2878 18.5891 17.2825 18.6321 17.2722C18.6392 17.2704 18.6445 17.2689 18.6482 17.2676C19.2385 16.5751 19.7136 15.7902 20.0475 14.9402C20.0462 14.9357 20.0443 14.9298 20.0414 14.9223C20.0209 14.8679 19.9683 14.7831 19.8759 14.6972C19.1517 14.0236 18.6921 13.0662 18.6921 12C18.6921 10.9338 19.1517 9.97647 19.8759 9.30284C19.9683 9.21694 20.0209 9.13213 20.0414 9.07778C20.0443 9.07024 20.0462 9.06433 20.0474 9.05989C19.7135 8.20964 19.2381 7.42451 18.6477 6.73182C18.6439 6.73056 18.6387 6.72899 18.6316 6.72728C18.5886 6.71698 18.5117 6.71167 18.4103 6.7296C17.5593 6.88007 16.6471 6.75035 15.835 6.29638C14.9641 5.80949 14.3582 5.03297 14.0829 4.15459C14.0485 4.04489 14.0042 3.97034 13.971 3.93144C13.9646 3.92384 13.9595 3.91869 13.956 3.91537C13.3285 3.77466 12.6739 3.70005 11.9999 3.70005C11.326 3.70005 10.6714 3.77465 10.0439 3.91534ZM20.0499 9.04904C20.0499 9.04903 20.0499 9.04942 20.0497 9.05022L20.0499 9.04904ZM3.94996 14.9511C3.94994 14.9511 3.94997 14.9508 3.95009 14.95L3.94996 14.9511ZM8.05004 12C8.05004 9.81852 9.81851 8.05005 12 8.05005C14.1816 8.05005 15.95 9.81852 15.95 12C15.95 14.1816 14.1816 15.95 12 15.95C9.81851 15.95 8.05004 14.1816 8.05004 12ZM12 9.95005C10.8679 9.95005 9.95004 10.8679 9.95004 12C9.95004 13.1322 10.8679 14.05 12 14.05C13.1322 14.05 14.05 13.1322 14.05 12C14.05 10.8679 13.1322 9.95005 12 9.95005Z"
        fill={color}
      />
    </svg>
  );
};

export default Setting;
