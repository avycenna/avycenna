export const GA4_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_ID!;

// Safe wrapper for gtag calls
const gtag = (...args: any[]) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

export const pageview = (url: string) => {
  gtag("config", GA4_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, params }: { action: string; params: any }) => {
  gtag("event", action, params);
};
