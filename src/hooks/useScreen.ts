import { getCurrentBP } from "@/utils/clientHelpers";
import { useEffect, useState } from "react";

function useScreen() {
  const [breakpointName, setBreakpointName] = useState(getCurrentBP);

  useEffect(() => {
    const handleResize = () => {
      setBreakpointName(getCurrentBP());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpointName;
}

export default useScreen;
