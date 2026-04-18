import type { BannerType } from "../types/experiment.types";
import { pushEvent } from "../utils/gtm";

export const useTracking = (variant: BannerType) => {
  const trackClickCTA = (label: string) => {
    pushEvent({
      event: "experiment_event",
      action: "click_cta",
      variant,
      label,
    });
  };

  const trackSubmitForm = () => {
    pushEvent({
      event: "experiment_event",
      action: "submit_form",
      variant,
      label: "form_submit",
    });
  };
  const trackViewBanner = () => {
    pushEvent({
      event: "experiment_view",
      action: "view_banner",
      variant,
      label: "banner_loaded",
    });
  };

  const trackScrollForm = () => {
    pushEvent({
      event: "experiment_event",
      action: "scroll_form",
      variant,
      label: "form_visible",
    });
  };

  return {
    trackClickCTA,
    trackSubmitForm,
    trackViewBanner,
    trackScrollForm,
  };
};
