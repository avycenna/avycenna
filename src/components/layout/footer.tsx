import Link from "next/link"
import { siteConfig } from "@/lib/config/site"
import { Github, Linkedin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/icons/logo"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
// import LogoCloud from "./logo-cloud"

export function Footer() {
  return (
    <footer className="w-full md:max-w-[90vw] p-8 text-foreground flex flex-col items-center gap-8 mx-auto">
      {/* <LogoCloud /> */}
      <Separator />

      {/* Info + Links Section */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-8">
        {/* Name & Description */}
        <div className="flex-1 text-center md:text-start">

          <div className="flex justify-center md:justify-start gap-4">
            <Logo />
            <h3 className="text-2xl font-bold">Avycenna</h3>
          </div>
          <div className="flex justify-center md:justify-start">
            <p className="max-w-96 text-sm text-balance text-muted-foreground my-2">
              Helping businesses scale with cutting-edge solutions and a focus on growth and innovation.
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-2">
            {siteConfig.links.linkedin && (
              <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="group/toggle extend-touch-target size-8"
                >
                  <Linkedin />
                </Button>
              </Link>
            )}
            {siteConfig.links.github && (
              <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="group/toggle extend-touch-target size-8"
                >
                  <Github />
                </Button>
              </Link>
            )}
            <ThemeToggle />
          </div>
          <SystemStatus status="operational" />
        </div>

        {/* Link Groups */}
        <div className="flex-2 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-center md:text-start">

          {siteConfig.footer.map((group) => (
            <div key={group.category}>
              <h4 className="font-semibold">{group.category}</h4>
              <ul className="mt-2 space-y-1">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:underline">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      <Separator />

      <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs gap-2">
        <div>
          <p>© {new Date().getFullYear()} Avycenna. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          {/* {siteConfig.links.linkedin && (
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="group/toggle extend-touch-target size-8"
              >
                <Linkedin />
              </Button>
            </Link>
          )}
          {siteConfig.links.github && (
            <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="group/toggle extend-touch-target size-8"
              >
                <Github />
              </Button>
            </Link>
          )}
          <ThemeToggle /> */}
          {siteConfig.legal.map((link) => (
            <Link className="hover:underline" href={link.href} key={link.label}>{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

interface SystemStatusProps {
  status?: "operational" | "degraded" | "outage"
  className?: string
}

export function SystemStatus({
  status = "operational",
  className,
}: SystemStatusProps) {
  const config = {
    operational: {
      label: "all systems live",
      color: "bg-emerald-500",
      badge:
        "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      animate: true,
    },
    degraded: {
      label: "Degraded Performance",
      color: "bg-yellow-500",
      badge:
        "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      animate: false,
    },
    outage: {
      label: "Major Outage",
      color: "bg-red-500",
      badge:
        "bg-red-500/10 text-red-600 border-red-500/20",
      animate: false,
    },
  }

  const current = config[status]

  return (
    <Badge
      variant="outline"
      role="status"
      aria-live="polite"
      className={cn(
        "gap-2",
        current.badge,
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {current.animate && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full animate-ping opacity-75",
              current.color
            )}
          />
        )}
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            current.color
          )}
        />
      </span>

      <span className="text-xs font-medium font-mono">
        {current.label}
      </span>
    </Badge>
  )
}
