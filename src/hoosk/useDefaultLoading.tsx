import { useEffect, useState } from "react";

const useDefaultLoading = (time: number = 500) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, time); // 첫 번째 0.5초 딜레이

    return () => clearTimeout(loadingTimer);
  }, []);

  return { isLoading };
};
export default useDefaultLoading;
