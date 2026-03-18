import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
  defaults: '2026-01-30'
})

if (process.env.NODE_ENV !== 'production') {
  posthog.debug(); // logs events locally
  posthog.opt_out_capturing(); // stops sending events
}
