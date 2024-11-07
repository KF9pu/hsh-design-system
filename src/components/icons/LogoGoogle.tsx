import React, { HtmlHTMLAttributes } from "react";

interface LogoGoogleProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  size?: number;
}
const LogoGoogle: React.FC<LogoGoogleProps> = ({ size = 24, ...rest }) => {
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
        d="M21.504 12.2253C21.504 11.5235 21.4413 10.8481 21.3236 10.2002H12V14.0293H17.3284C17.0985 15.2668 16.4011 16.3162 15.3528 17.018V19.5018H18.5516C20.4238 17.7781 21.504 15.2404 21.504 12.2253Z"
        fill="#3D82F0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9996 21.8999C14.6726 21.8999 16.9133 21.0133 18.5512 19.5019L15.3524 17.017C14.4658 17.611 13.3317 17.9619 11.9996 17.9619C9.42124 17.9619 7.23884 16.2206 6.46004 13.8809H3.15234V16.4461C4.78144 19.6812 8.12984 21.8999 11.9996 21.8999Z"
        fill="#31A752"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.46001 13.8809C6.26201 13.2869 6.14981 12.6522 6.14981 11.9999C6.14981 11.3476 6.26201 10.7129 6.46001 10.1189V7.55371H3.15231C2.48241 8.89021 2.09961 10.4027 2.09961 11.9999C2.09961 13.5971 2.48241 15.1096 3.15231 16.4461L6.46001 13.8809Z"
        fill="#F9BA00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9996 6.03761C13.4527 6.03761 14.7584 6.53701 15.7836 7.51821L18.6238 4.67911C16.9089 3.08081 14.6682 2.09961 11.9996 2.09961C8.12984 2.09961 4.78144 4.31831 3.15234 7.55451L6.46004 10.1186C7.23884 7.77891 9.42124 6.03761 11.9996 6.03761Z"
        fill="#E64234"
      />
    </svg>
  );
};

export default LogoGoogle;
