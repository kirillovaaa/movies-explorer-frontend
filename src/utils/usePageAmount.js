import { useEffect, useRef, useState } from "react";

const usePageAmount = () => {
  const [initialAmount, setInitialAmount] = useState(0);
  const [nextPageAmount, setNextPageAmount] = useState(0);

  let throttleResize = useRef(null);

  const calculateAmounts = () => {
    let initialAmount = 16;
    let nextPageAmount = 4;

    if (window.innerWidth <= 1280) {
      initialAmount = 8;
      nextPageAmount = 2;
    }
    if (window.innerWidth <= 480) {
      initialAmount = 5;
      nextPageAmount = 2;
    }

    setInitialAmount(initialAmount);
    setNextPageAmount(nextPageAmount);
  };

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(throttleResize.current);
      throttleResize.current = setTimeout(calculateAmounts, 1000);
    };

    calculateAmounts();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    initialAmount,
    nextPageAmount,
  };
};

export default usePageAmount;
