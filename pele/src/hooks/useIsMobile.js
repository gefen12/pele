// src/hooks/useIsMobile.js
import { useEffect, useState } from "react";

export default function useIsMobile(query = "(max-width: 768px)") {
  const get = () =>
    typeof window !== "undefined" && window.matchMedia(query).matches;

  const [isMobile, setIsMobile] = useState(get);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = e => setIsMobile(e.matches);
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange); // Safari
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return isMobile;
}
