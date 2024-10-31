import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [breakpoint, setBreakpoint] = useState("xs");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;
        setInnerWidth(width);
        setInnerHeight(window.innerHeight);

        // Determine breakpoint based on width
        if (width < 768) {
          setBreakpoint("xs");
        } else if (width >= 768 && width < 992) {
          setBreakpoint("sm");
        } else if (width >= 992 && width < 1200) {
          setBreakpoint("md");
        } else {
          setBreakpoint("lg");
        }
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return {
    innerWidth,
    innerHeight,
    breakpoint, // Return breakpoint state
  };
};

export default useMediaQuery;
