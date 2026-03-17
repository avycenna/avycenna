import Link from "next/link"
import { siteConfig } from "@/lib/config"
import { Icons } from "@/components/icons/icons"
import { Button } from "@/components/ui/button"

export function GitHubLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.gitHub />
      </Link>
    </Button>
  )
}
