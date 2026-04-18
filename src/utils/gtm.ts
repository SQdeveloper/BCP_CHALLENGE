import type { BannerType } from "../types/experiment.types";

type EventName = "experiment_view" | "experiment_event";

type Action = "view_banner" | "click_cta" | "scroll_form" | "submit_form";

interface GTMEvent {
  event: EventName;
  experimentId: string;
  action: Action;
  variant: BannerType;
  label: string;
}

const EXPERIMENT_ID = "bcp_banner_test_v1";

export const pushEvent = (data: Omit<GTMEvent, "experimentId">) => {
  window.dataLayer = window.dataLayer || [];

  const event: GTMEvent = {
    ...data,
    experimentId: EXPERIMENT_ID,
  };

  window.dataLayer.push(event);

  console.log("GTM EVENT:", event);
};
