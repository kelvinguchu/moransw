"use client";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Debounced handler to avoid excessive updates during resizing
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 200); // Adjust the debounce delay as needed (200ms is a good balance)

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the handler immediately to set the initial window size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel(); // Ensure debounced function is properly canceled
    };
  }, []); // Empty array ensures that the effect runs only on mount and unmount

  return windowSize;
}

export default useWindowSize;
