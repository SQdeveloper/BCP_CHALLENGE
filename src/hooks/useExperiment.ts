import { useMemo } from "react";
import { VARIANT_BANNER, type BannerType } from "../types/experiment.types";

const STORAGE_KEY = "bcp_variant";

export const useExperiment = () => {
  const variant = useMemo<BannerType>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as BannerType | null;

    if (stored) return stored;

    const random: BannerType =
      Math.random() < 0.5 ? VARIANT_BANNER.BANNER_A : VARIANT_BANNER.BANNER_B;
    localStorage.setItem(STORAGE_KEY, random);

    return random;
  }, []);

  return { variant };
};
