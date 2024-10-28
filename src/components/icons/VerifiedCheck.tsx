import React, { HtmlHTMLAttributes } from "react";

interface VerifiedCheckProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  fill?: true;
  color?: string;
}

const VerifiedCheck: React.FC<VerifiedCheckProps> = ({
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.026 2.42717C11.1117 1.32502 12.8895 1.3251 13.9752 2.42718L15.0882 3.55697C15.2727 3.7442 15.5251 3.84872 15.7878 3.84675L17.3737 3.83488C18.9208 3.8233 20.1778 5.08046 20.1663 6.62745L20.1544 8.21332C20.1525 8.47619 20.2571 8.72858 20.4442 8.91296L21.574 10.026C22.6761 11.1117 22.6761 12.8895 21.574 13.9753L20.4442 15.0882C20.257 15.2726 20.1525 15.5251 20.1544 15.7879L20.1663 17.3738C20.1778 18.9207 18.9207 20.1778 17.3737 20.1663L15.7878 20.1544C15.525 20.1525 15.2726 20.257 15.0881 20.4442L13.9752 21.574C12.8895 22.6761 11.1117 22.6761 10.026 21.574L8.9129 20.4442C8.72853 20.257 8.47609 20.1525 8.21322 20.1544L6.62739 20.1663C5.0804 20.1778 3.82329 18.9208 3.83488 17.3737L3.84674 15.7879C3.84871 15.5251 3.74413 15.2726 3.5569 15.0881L2.42718 13.9752C1.32505 12.8895 1.32506 11.1117 2.42718 10.026L3.55695 8.91294C3.74417 8.7285 3.84871 8.47611 3.84674 8.21331L3.83488 6.62744C3.82329 5.08038 5.08037 3.8233 6.62743 3.83488L8.21331 3.84675C8.4761 3.84872 8.72851 3.74416 8.91295 3.55694L10.026 2.42717ZM15.3753 8.85324L16.6258 10.1479L10.8241 15.7519L7.3753 12.4206L8.62583 11.126L10.8241 13.2493L15.3753 8.85324Z"
          fill={color}
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9752 2.42718C12.8895 1.3251 11.1117 1.32502 10.026 2.42717L8.91295 3.55694C8.72851 3.74416 8.4761 3.84872 8.21331 3.84675L6.62743 3.83488C5.08037 3.8233 3.82329 5.08038 3.83488 6.62744L3.84674 8.21331C3.84871 8.47611 3.74417 8.7285 3.55695 8.91294L2.42718 10.026C1.32506 11.1117 1.32505 12.8895 2.42718 13.9752L3.5569 15.0881C3.74413 15.2726 3.84871 15.5251 3.84674 15.7879L3.83488 17.3737C3.82329 18.9208 5.0804 20.1778 6.62739 20.1663L8.21323 20.1544C8.47609 20.1525 8.72853 20.257 8.91291 20.4442L10.026 21.574C11.1117 22.6761 12.8895 22.6761 13.9752 21.574L15.0881 20.4442C15.2726 20.257 15.525 20.1525 15.7878 20.1544L17.3737 20.1663C18.9207 20.1778 20.1778 18.9207 20.1663 17.3738L20.1544 15.7879C20.1525 15.5251 20.257 15.2726 20.4442 15.0882L21.574 13.9753C22.6761 12.8895 22.6761 11.1117 21.574 10.026L20.4442 8.91296C20.2571 8.72858 20.1525 8.47619 20.1544 8.21332L20.1663 6.62745C20.1778 5.08046 18.9208 3.8233 17.3737 3.83488L15.7878 3.84675C15.5251 3.84872 15.2727 3.7442 15.0882 3.55697L13.9752 2.42718ZM11.3083 3.69037C11.6889 3.30402 12.3122 3.30395 12.6929 3.6904L13.8059 4.82017C14.3319 5.35408 15.0518 5.65231 15.8013 5.6467L17.3872 5.63483C17.9295 5.63077 18.3703 6.07148 18.3663 6.61396L18.3544 8.19983C18.3489 8.94923 18.647 9.66916 19.181 10.1952L20.3108 11.3082C20.6972 11.6889 20.6972 12.3123 20.3108 12.693L19.181 13.8059C18.647 14.332 18.3489 15.0518 18.3544 15.8013L18.3663 17.3872C18.3703 17.9295 17.9296 18.3703 17.3872 18.3663L15.8013 18.3544C15.0519 18.3489 14.332 18.647 13.8059 19.181L12.6929 20.3108C12.3123 20.6972 11.6889 20.6972 11.3082 20.3108L10.1952 19.181C9.66919 18.647 8.94932 18.3489 8.19991 18.3544L6.614 18.3663C6.07152 18.3703 5.63076 17.9295 5.63483 17.3872L5.64669 15.8013C5.65231 15.0518 5.35413 14.332 4.82022 13.8059L3.6904 12.6929C3.30398 12.3123 3.30397 11.6889 3.6904 11.3083L4.82017 10.1952C5.35412 9.66921 5.65231 8.94935 5.64669 8.19984L5.63483 6.61397C5.63076 6.07153 6.07152 5.63077 6.61395 5.63483L8.19983 5.6467C8.94934 5.65231 9.66918 5.35415 10.1952 4.8202L11.3083 3.69037ZM16.6258 10.1479L15.3753 8.85325L10.8241 13.2493L8.62583 11.126L7.3753 12.4206L10.8241 15.7519L16.6258 10.1479Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default VerifiedCheck;
