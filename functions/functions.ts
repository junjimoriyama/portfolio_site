import { disconnect } from "process";
import { useEffect } from "react";


type ObserverOptions = {
  threshold: number;
};

// インターセクションオブザーバー
const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement | null>,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
  options: ObserverOptions
) => {
  useEffect(() => {
    if (!ref.current) return;

    // 監視
    const ObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState(true);
        }
      });
    };

    const observer = new IntersectionObserver(ObserverCallback, {
      threshold: options.threshold,
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, setState, options.threshold]);
};

export default useIntersectionObserver;
