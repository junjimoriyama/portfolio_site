import { disconnect } from "process";
import { useEffect } from "react";
// インターセクションオブザーバー

type ObserverOptions = {
  threshold: number;
};

const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement | null>,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
  options: ObserverOptions
) => {
  useEffect(() => {
    if (!ref.current) return;

    const ObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
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
      // observer.unobserve(ref.current);
      observer.disconnect()
    };
  }, [ref.current, setState, options.threshold]);
};

// const useIntersectionObserver = (
//   ref: React.RefObject<HTMLElement | null>,
//   setState: React.Dispatch<React.SetStateAction<boolean>>,
//   options: ObserverOptions
// ) => {
//   useEffect(() => {
//     if (!ref.current) return;

//     // entriesに監視対象の要素入る
//     const ObserverCallback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         // 監視対象の要素が見えたらtrue
//         if (entry.isIntersecting) {
//           setState(true);
//         }
//       });
//     };

//     // オプションで決めた監視位置によって実行
//     const observer = new IntersectionObserver(ObserverCallback, {
//       threshold: options.threshold,
//     })

//     // 監視開始
//     observer.observe(ref.current)

//     return () => {
//       // コンポーネントがアンマウントされると監視を解除
//       observer.disconnect()
//     }
//   },[ref, setState, options.threshold]);
// };


export default useIntersectionObserver;
