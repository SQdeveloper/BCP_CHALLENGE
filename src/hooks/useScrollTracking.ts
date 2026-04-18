import { useEffect } from "react";
import type { BannerType } from "../types/experiment.types";
import { useTracking } from "./useTracking";

export const useScrollTracking = (variant: BannerType) => {
  const { trackScrollForm } = useTracking(variant);

  useEffect(() => {
    const form = document.getElementById("form");
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackScrollForm();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(form);

    return () => observer.disconnect();
  }, [variant]);
};
