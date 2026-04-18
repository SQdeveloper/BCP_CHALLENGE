import { useEffect, useState } from "react";

type UseScrollHeaderOptions = {
  threshold?: number;
};

export const useScrollHeader = (options?: UseScrollHeaderOptions) => {
  const { threshold = 50 } = options || {};
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > threshold;
          setScrolled(isScrolled);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrolled;
};
