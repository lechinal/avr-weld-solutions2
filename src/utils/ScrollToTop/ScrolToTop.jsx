import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Derulează la coordonatele (0, 0) - vârful paginii
    window.scrollTo(0, 0);
    // Ruleaza acest efect de fiecare data cand pathname se schimba
  }, [pathname]);

  return null;
}

export default ScrollToTop;
