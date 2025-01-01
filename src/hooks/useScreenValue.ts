import { screens } from "@/config.json";
import { useEffect, useState } from "react";
import useScreen from "./useScreen";
import { getCurrentBP } from "@/utils/clientHelpers";

function useScreenValue(screen: keyof typeof screens) {
  const [active, setActive] = useState(() => getCurrentBP()[0] === screen);

  const [bpName] = useScreen();

  useEffect(() => {
    setActive(bpName === screen);
  }, [bpName, screen]);

  return active;
}

export default useScreenValue;
