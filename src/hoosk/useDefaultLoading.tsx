import { useEffect, useState } from "react";

const useDefaultLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 0.5초 딜레이

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 제거
  }, []);
  return { isLoading };
};
export default useDefaultLoading;
