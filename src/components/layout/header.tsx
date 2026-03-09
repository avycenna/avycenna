import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { GitHubLink } from "./github-link"
import { Icons } from "@/components/icons/icons"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Header() {
  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-sm py-4">
      <div className="container-wrapper max-w-7xl 3xl:fixed:px-0 px-6 mx-auto">
        <div className="3xl:fixed:container flex h-(--header-height) items-center **:data-[slot=separator]:h-4!">
          <MobileNav
            items={siteConfig.navItems}
            className="flex lg:hidden"
          />
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden size-8 lg:flex"
          >
            <Link href="/">
              <Icons.logo className="size-5" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
          </Button>
          <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <GitHubLink />
            <Separator orientation="vertical" />
            <ThemeToggle />
            <Separator orientation="vertical" className="mr-2" />
            <Button
              asChild
              size="sm"
              className="hidden h-7.75 rounded-lg sm:flex"
              variant="default"
            >
              <Link href="/create">
                New Project
              </Link>
            </Button>
            <Button asChild size="sm" className="h-7.75 rounded-lg sm:hidden">
              <Link href="/create">
                New
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
