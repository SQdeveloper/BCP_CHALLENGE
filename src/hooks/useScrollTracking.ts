import { useEffect } from "react";
import type { BannerType } from "../types/experiment.types";
import { useTracking } from "./useTracking";

export const useScrollTracking = (variant: BannerType) => {
  const { trackScrollForm } = useTracking(variant);

  useEffect(() => {
    const handleScroll = () => {
      const form = document.getElementById("form");
      if (!form) return;

      const rect = form.getBoundingClientRect();

      if (rect.top < window.innerHeight) {
        trackScrollForm();

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);
};
