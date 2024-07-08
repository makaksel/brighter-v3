'use client';

import { useEffect, useState } from "react";

/* import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = (width: string) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return targetReached;
}; */

export const useMediaQuery = (maxWidth: string) => {

  const [isLargeScreen, setIsLargeScreen] = useState(false); 

  useEffect(() => {
    setIsLargeScreen(window.matchMedia(`(max-width: ${maxWidth}px)`).matches);

    // I write this into a function for better visibility
    const handleResize = (e: any) => {
      setIsLargeScreen(e.matches);
    };

    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    mediaQuery.addEventListener('change', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return isLargeScreen
};
