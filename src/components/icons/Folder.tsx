import React from "react";

interface FolderProps {
  fill?: true;
  color?: string;
}

const Folder: React.FC<FolderProps> = ({ fill = false, color = "#171719" }) => {
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
          d="M8.71288 4.09969C8.90019 4.09927 9.12186 4.09877 9.34007 4.14994C9.52981 4.19443 9.71158 4.26785 9.87899 4.36763C10.0715 4.48237 10.2307 4.63668 10.3651 4.76709L10.4003 4.80113L11.5421 5.90338C11.6334 5.99159 11.6813 6.0375 11.7181 6.06998C11.729 6.07962 11.7361 6.08548 11.7401 6.08864C11.7455 6.09146 11.7512 6.09377 11.7571 6.09554C11.7622 6.096 11.7713 6.09671 11.7859 6.09736C11.8349 6.09955 11.9012 6.09976 12.0282 6.09976L20.2217 6.09976C20.3419 6.09972 20.4802 6.09967 20.6013 6.10956C20.7403 6.12092 20.9337 6.14968 21.1352 6.25235C21.3986 6.38657 21.6128 6.60074 21.747 6.86417C21.8497 7.06567 21.8784 7.25903 21.8898 7.39806C21.8997 7.5191 21.8996 7.6574 21.8996 7.77763L21.8997 18.2218C21.8997 18.342 21.8997 18.4804 21.8899 18.6014C21.8785 18.7405 21.8497 18.9338 21.7471 19.1353C21.6128 19.3988 21.3987 19.6129 21.1352 19.7472C20.9337 19.8498 20.7404 19.8786 20.6013 19.89C20.4803 19.8998 20.342 19.8998 20.2218 19.8998H3.77751C3.65727 19.8998 3.51897 19.8998 3.39793 19.89C3.2589 19.8786 3.06553 19.8498 2.86403 19.7472C2.6006 19.6129 2.38643 19.3988 2.25221 19.1353C2.14954 18.9338 2.12078 18.7405 2.10942 18.6014C2.09953 18.4804 2.09958 18.3421 2.09961 18.2219L2.09964 5.77766C2.09961 5.65742 2.09956 5.51911 2.10945 5.39807C2.12081 5.25904 2.14957 5.06567 2.25224 4.86417C2.38647 4.60075 2.60064 4.38657 2.86406 4.25235C3.06556 4.14968 3.25893 4.12092 3.39796 4.10956C3.519 4.09967 3.6573 4.09972 3.77754 4.09976L8.71288 4.09969Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.66394 5.89976C8.79095 5.89976 8.85726 5.89997 8.9063 5.90216C8.92086 5.90281 8.93002 5.90352 8.93505 5.90398C8.94095 5.90575 8.94667 5.90806 8.95214 5.91088C8.95608 5.91404 8.96316 5.9199 8.97409 5.92954C9.0109 5.96202 9.05874 6.00793 9.15012 6.09614L10.2919 7.19839L10.3271 7.23244C10.4615 7.36284 10.6207 7.51715 10.8132 7.63189C10.9806 7.73167 11.1624 7.80509 11.3521 7.84958C11.5703 7.90075 11.792 7.90025 11.9793 7.89983L20.0996 7.89976L20.0997 18.0998H3.89962L3.89965 5.89976H8.66394ZM9.34008 4.14994C9.12187 4.09877 8.9002 4.09927 8.71288 4.09969L3.77755 4.09976C3.65731 4.09972 3.519 4.09967 3.39796 4.10956C3.25893 4.12092 3.06556 4.14968 2.86406 4.25235C2.60064 4.38657 2.38647 4.60075 2.25224 4.86417C2.14957 5.06567 2.12081 5.25904 2.10945 5.39807C2.09956 5.51911 2.09961 5.65742 2.09964 5.77766L2.09961 18.2219C2.09958 18.3421 2.09953 18.4804 2.10942 18.6014C2.12078 18.7405 2.14954 18.9338 2.25221 19.1353C2.38643 19.3988 2.6006 19.6129 2.86403 19.7472C3.06553 19.8498 3.2589 19.8786 3.39793 19.89C3.51897 19.8998 3.65728 19.8998 3.77752 19.8998H20.2218C20.342 19.8998 20.4803 19.8998 20.6014 19.89C20.7404 19.8786 20.9338 19.8498 21.1353 19.7472C21.3987 19.6129 21.6129 19.3988 21.7471 19.1353C21.8498 18.9338 21.8785 18.7405 21.8899 18.6014C21.9008 18.4679 21.8997 18.3336 21.8997 18.1997L21.8996 7.7777C21.8996 7.65746 21.8997 7.5191 21.8898 7.39806C21.8784 7.25903 21.8497 7.06567 21.747 6.86417C21.6128 6.60074 21.3986 6.38657 21.1352 6.25235C20.9337 6.14968 20.7403 6.12092 20.6013 6.10956C20.4803 6.09967 20.3419 6.09972 20.2217 6.09976L12.0283 6.09976C11.9012 6.09976 11.8349 6.09955 11.7859 6.09736C11.7713 6.09671 11.7622 6.096 11.7571 6.09554C11.7513 6.09377 11.7455 6.09146 11.7401 6.08864C11.7361 6.08548 11.729 6.07962 11.7181 6.06998C11.6813 6.0375 11.6335 5.99159 11.5421 5.90338L10.3651 4.76709C10.2307 4.63668 10.0715 4.48237 9.879 4.36763C9.71158 4.26785 9.52982 4.19443 9.34008 4.14994Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Folder;