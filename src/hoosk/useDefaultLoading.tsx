import { useEffect, useState } from "react";
interface DefaultLoadingProps {
  time?: number;
}
const useDefaultLoading = ({ time = 500 }: DefaultLoadingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const delayStages = [500, 1000, 1500]; // 각 지연 시간을 설정 (단위: ms)
  const [delaysPassed, setDelaysPassed] = useState(
    Array(delayStages.length).fill(false)
  );

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, time); // 첫 번째 0.5초 딜레이

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // 각 딜레이 단계에 대해 타이머 설정
      delayStages.forEach((delay, index) => {
        const timer = setTimeout(() => {
          setDelaysPassed((prev) => {
            const updatedDelays = [...prev];
            updatedDelays[index] = true;
            return updatedDelays;
          });
        }, delay);

        return () => clearTimeout(timer);
      });
    }
  }, [isLoading]);
  return { isLoading, delaysPassed };
};
export default useDefaultLoading;
