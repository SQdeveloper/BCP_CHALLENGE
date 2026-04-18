import type { BannerType } from "../types/experiment.types";
import { pushEvent } from "../utils/gtm";

const EXPERIMENT_ID = "bcp_banner_test_v1";

type ExperimentAction =
  | "click_cta"
  | "submit_form"
  | "view_banner"
  | "scroll_form";

type TrackingEvent = {
  event: "experiment_event" | "experiment_view";
  experimentId: string;
  action: ExperimentAction;
  variant: BannerType;
  label: string;
};

export const useTracking = (variant: BannerType) => {
  const track = (
    action: ExperimentAction,
    label: string,
    event: TrackingEvent["event"] = "experiment_event",
  ) => {
    const payload: TrackingEvent = {
      event,
      experimentId: EXPERIMENT_ID,
      action,
      variant,
      label,
    };

    pushEvent(payload);
  };

  const trackClickCTA = (label: string) => {
    track("click_cta", label);
  };

  const trackSubmitForm = () => {
    track("submit_form", "form_submit");
  };

  const trackViewBanner = () => {
    track("view_banner", "banner_loaded", "experiment_view");
  };

  const trackScrollForm = () => {
    track("scroll_form", "form_visible");
  };

  return {
    trackClickCTA,
    trackSubmitForm,
    trackViewBanner,
    trackScrollForm,
  };
};
