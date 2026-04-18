import type { BannerType } from "../types/experiment.types";

export const VARIANT_CONFIG: Record<
  BannerType,
  {
    text: string;
    bg: string;
  }
> = {
  A: {
    text: "Solicita ahora",
    bg: "bg-bcp-gradient-blue",
  },
  B: {
    text: "Aplica ya",
    bg: "bg-bcp-gradient-orange",
  },
};
