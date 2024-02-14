import { useEffect, useState } from "react";

function useIsSmallScreen() {
  const [isSmallDevice, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.matchMedia("(max-width : 1150px)").matches);

    const handleResize = (e: any) => {
      setIsSmallScreen(e.matches);
    };

    const mediaQuery = window.matchMedia("(max-width : 1150px)");

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return {
    isSmallDevice,
  };
}

export default useIsSmallScreen;
