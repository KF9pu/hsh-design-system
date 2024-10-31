import React from "react";
import type { FC, HtmlHTMLAttributes } from "react";
import useDefaultLoading from "../../hooks/useDefaultLoading";
import "../../theme.css";

const LoadingFadeBubble: FC<unknown> = () => {
  const { isLoading } = useDefaultLoading(1500);

  return (
    <main className={`loading-container ${isLoading ? "" : "hidden"}`}>
      <FadeBubble className="fade-bubble fade-bubble-primary" />
      <FadeBubble className="fade-bubble fade-bubble-lime" />
      <FadeBubble className="fade-bubble fade-bubble-blue" />
      <FadeBubble className="fade-bubble fade-bubble-sky" />
      <div>Loading ... </div>
    </main>
  );
};

export default LoadingFadeBubble;

const FadeBubble: FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({
  ...rest
}) => {
  return <div {...rest} className={`fade-bubble ${rest.className ?? ""}`} />;
};
