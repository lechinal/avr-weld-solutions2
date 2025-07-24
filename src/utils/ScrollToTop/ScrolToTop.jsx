import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // Destructurează pathname din obiectul location

  useEffect(() => {
    window.scrollTo(0, 0); // Derulează la coordonatele (0, 0) - vârful paginii
  }, [pathname]); // Ruleaza acest efect de fiecare data cand pathname se schimba

  return null; // Aceasta componenta nu randeaza nimic vizibil
}

export default ScrollToTop;
