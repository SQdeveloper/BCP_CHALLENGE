declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}

export {};
