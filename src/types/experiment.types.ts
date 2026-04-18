export const VARIANT_BANNER = {
  BANNER_A: "A",
  BANNER_B: "B",
} as const;

export type BannerType = (typeof VARIANT_BANNER)[keyof typeof VARIANT_BANNER];

export type BannerConfig = {
  variant: BannerType;
};

export interface BannerProps {
  config: BannerConfig;
}

export type ExperimentEventName = "experiment_view" | "experiment_event";

export type ExperimentAction =
  | "view_banner"
  | "click_cta"
  | "scroll_form"
  | "submit_form";

export interface GTMEvent {
  event: ExperimentEventName;
  experimentId: string;
  action: ExperimentAction;
  variant: BannerType;
  label: string;
}
