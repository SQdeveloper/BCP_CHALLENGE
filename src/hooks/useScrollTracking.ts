import { useEffect } from "react";
import { pushEvent } from "../utils/gtm";
import type { BannerType } from "../types/experiment.types";

export const useScrollTracking = (variant: BannerType) => {
  useEffect(() => {
    const handleScroll = () => {
      const form = document.getElementById("form");
      if (!form) return;

      const rect = form.getBoundingClientRect();

      if (rect.top < window.innerHeight) {
        pushEvent({
          event: "experiment_event",
          action: "scroll_form",
          variant,
          label: "form_visible",
        });

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);
};
