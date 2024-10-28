import React, { HtmlHTMLAttributes } from "react";

interface UploadProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
}

const Upload: React.FC<UploadProps> = ({ color = "#171719", ...rest }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8997 15.0005L20.8997 18.4308C20.8997 18.6851 20.8997 18.9272 20.883 19.1312C20.8649 19.3536 20.8225 19.6087 20.6926 19.8637C20.5104 20.2212 20.2197 20.5118 19.8622 20.694C19.6073 20.8239 19.3521 20.8663 19.1297 20.8845C18.9258 20.9011 18.6838 20.9011 18.4295 20.9011H5.56986C5.31556 20.9011 5.07348 20.9011 4.86953 20.8845C4.64712 20.8663 4.39201 20.8239 4.13703 20.694C3.77952 20.5118 3.48886 20.2212 3.3067 19.8637C3.17678 19.6087 3.1344 19.3536 3.11623 19.1312C3.09956 18.9272 3.09958 18.6852 3.09961 18.4308V15.0005H4.89962V19.0008C4.89962 19.056 4.94439 19.1008 4.99962 19.1008H18.9997C19.0549 19.1008 19.0997 19.056 19.0997 19.0008V15.0005H20.8997Z"
        fill={color}
      />
      <path
        d="M16.905 8.6179C16.5643 8.97986 15.9947 8.99712 15.6328 8.65645L12.8996 6.08406V15.5013C12.8996 15.9983 12.4967 16.4013 11.9996 16.4013C11.5026 16.4013 11.0996 15.9983 11.0996 15.5013V6.08406L8.36644 8.65645C8.00448 8.99712 7.4349 8.97986 7.09423 8.6179C6.75357 8.25594 6.77083 7.68636 7.13278 7.34569L11.3828 3.34569C11.7293 3.01953 12.2699 3.01953 12.6164 3.34569L16.8664 7.34569C17.2284 7.68636 17.2457 8.25594 16.905 8.6179Z"
        fill={color}
      />
    </svg>
  );
};

export default Upload;
