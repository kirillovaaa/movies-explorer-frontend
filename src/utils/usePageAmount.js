import { useEffect, useRef, useState } from "react";
import breakpoints from "../constants/breakpoints";

const usePageAmount = () => {
  const [initialAmount, setInitialAmount] = useState(0);
  const [nextPageAmount, setNextPageAmount] = useState(0);

  let throttleResize = useRef(null);

  const calculateAmounts = () => {
    let initialAmount = breakpoints.l.initial;
    let nextPageAmount = breakpoints.l.page;

    if (window.innerWidth <= 1280) {
      initialAmount = breakpoints.m.initial;
      nextPageAmount = breakpoints.m.initial;
    }
    if (window.innerWidth <= 480) {
      initialAmount = breakpoints.s.initial;
      nextPageAmount = breakpoints.s.page;
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
