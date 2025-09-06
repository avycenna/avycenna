"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";
import * as gtag from "@/lib/gtag";

export function GA4Provider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const measurementId = gtag.GA4_TRACKING_ID;

  // Track pageviews on route change
  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    gtag.pageview(url);
  }, [pathname, searchParams]);

  return (
    <>
      {/* GA4 library */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />

      {/* GA4 initialization */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname
          });
        `}
      </Script>
    </>
  );
}
