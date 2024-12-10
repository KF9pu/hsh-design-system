import { useEffect, useState } from "react";
import { debounce } from "lodash";

// TODO: 라이브러리 설치 후에도 적용 되도록 lodash 세팅 해야함

// Define Breakpoint Enum
export enum Breakpoint {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

const breakpoints = {
  [Breakpoint.XS]: 768,
  [Breakpoint.SM]: 992,
  [Breakpoint.MD]: 1200,
};

const getBreakpoint = (width: number): Breakpoint => {
  if (width < breakpoints[Breakpoint.XS]) return Breakpoint.XS;
  if (width < breakpoints[Breakpoint.SM]) return Breakpoint.SM;
  if (width < breakpoints[Breakpoint.MD]) return Breakpoint.MD;
  return Breakpoint.LG;
};

const useMediaQuery = () => {
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [innerHeight, setInnerHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const [breakpoint, setBreakpoint] = useState(
    typeof window !== "undefined"
      ? getBreakpoint(window.innerWidth)
      : Breakpoint.XS
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = debounce(() => {
        const width = window.innerWidth;
        setInnerWidth(width);
        setInnerHeight(window.innerHeight);
        setBreakpoint(getBreakpoint(width));
      }, 200);

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return { innerWidth, innerHeight, breakpoint };
};

export default useMediaQuery;
