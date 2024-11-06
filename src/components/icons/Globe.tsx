import React, { HtmlHTMLAttributes } from "react";

interface GlobeProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  size?: number;
}

const Globe: React.FC<GlobeProps> = ({
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
        d="M11.9569 3.90021C11.9853 3.90006 12.0139 3.90006 12.0424 3.90021C12.9305 5.16345 13.6164 6.57908 14.0533 8.10009H9.94592C10.3828 6.57908 11.0688 5.16345 11.9569 3.90021ZM14.3912 4.25896C15.058 5.45294 15.5753 6.74176 15.9178 8.10009H19.1006C18.0976 6.27771 16.4135 4.88301 14.3912 4.25896ZM19.8247 9.90009H16.2622C16.3528 10.5872 16.3996 11.2882 16.3996 12.0001C16.3996 12.712 16.3528 13.413 16.2622 14.1001H19.8247C20.004 13.4303 20.0996 12.7264 20.0996 12.0001C20.0996 11.2738 20.004 10.5698 19.8247 9.90009ZM19.1006 15.9001H15.9178C15.5753 17.2584 15.058 18.5472 14.3912 19.7412C16.4135 19.1172 18.0976 17.7225 19.1006 15.9001ZM12.0424 20.1C12.0139 20.1001 11.9853 20.1001 11.9568 20.1C11.0687 18.8367 10.3828 17.4211 9.94591 15.9001H14.0533C13.6165 17.4211 12.9305 18.8367 12.0424 20.1ZM9.60802 19.7412C7.58574 19.1172 5.9016 17.7225 4.89859 15.9001H8.08141C8.42393 17.2584 8.94124 18.5473 9.60802 19.7412ZM4.17448 14.1001H7.73706C7.64639 13.413 7.59961 12.712 7.59961 12.0001C7.59961 11.2882 7.6464 10.5872 7.73706 9.90009H4.17449C3.9952 10.5698 3.89961 11.2738 3.89961 12.0001C3.89961 12.7264 3.9952 13.4303 4.17448 14.1001ZM4.8986 8.10009H8.08143C8.42395 6.74175 8.94125 5.45294 9.60803 4.25895C7.58575 4.883 5.90161 6.27771 4.8986 8.10009ZM11.9996 2.1001C6.53199 2.1001 2.09961 6.53248 2.09961 12.0001C2.09961 17.4677 6.53199 21.9001 11.9996 21.9001C17.4672 21.9001 21.8996 17.4677 21.8996 12.0001C21.8996 6.53248 17.4672 2.1001 11.9996 2.1001ZM9.55493 14.1001H14.4443C14.5466 13.415 14.5996 12.7137 14.5996 12.0001C14.5996 11.2865 14.5466 10.5852 14.4443 9.90009H9.55493C9.45262 10.5852 9.39961 11.2865 9.39961 12.0001C9.39961 12.7137 9.45262 13.415 9.55493 14.1001Z"
        fill={color}
      />
    </svg>
  );
};

export default Globe;
