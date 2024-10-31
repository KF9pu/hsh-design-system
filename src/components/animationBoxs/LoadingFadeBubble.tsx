import React from "react";
import type { FC, HtmlHTMLAttributes, ReactNode } from "react";
import useDefaultLoading from "../../hooks/useDefaultLoading";
import "../../theme.css";

interface LoadingFadeBubbleProps {
  mainColor?: string;
  defaultTextColor?: string;
  FadeBubbleColor1?: string;
  FadeBubbleColor2?: string;
  FadeBubbleColor3?: string;
  FadeBubbleColor4?: string;
  children?: ReactNode;
}

const LoadingFadeBubble: FC<LoadingFadeBubbleProps> = ({
  mainColor = "white",
  defaultTextColor = "black",
  FadeBubbleColor1 = "#007bff",
  FadeBubbleColor2 = "rgba(173, 255, 47, 0.9)",
  FadeBubbleColor3 = "rgba(70, 130, 180, 0.9)",
  FadeBubbleColor4 = "rgba(135, 206, 250, 0.9)",
  children,
}) => {
  const { isLoading } = useDefaultLoading(1500);

  return (
    <main
      className={`loading-container ${isLoading ? "" : "hidden"}`}
      style={{ backgroundColor: mainColor }}
    >
      <FadeBubble
        className="fade-bubble fade-bubble-primary"
        style={{ backgroundColor: FadeBubbleColor1 }}
      />
      <FadeBubble
        className="fade-bubble fade-bubble-lime"
        style={{ backgroundColor: FadeBubbleColor2 }}
      />
      <FadeBubble
        className="fade-bubble fade-bubble-blue"
        style={{ backgroundColor: FadeBubbleColor3 }}
      />
      <FadeBubble
        className="fade-bubble fade-bubble-sky"
        style={{ backgroundColor: FadeBubbleColor4 }}
      />
      {children ?? <div style={{ color: defaultTextColor }}>Loading ... </div>}
    </main>
  );
};

export default LoadingFadeBubble;

const FadeBubble: FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({
  ...rest
}) => {
  return <div {...rest} className={`fade-bubble ${rest.className ?? ""}`} />;
};
