import Link from "next/link";
import BackgroundGrid from "./grid-background";
import { Button } from "./ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function CtaSection() {
  return (
    <div className="h-[30rem] w-full rounded-md bg-background/80 relative flex flex-col items-center justify-center antialiased">
      <div className="flex flex-col items-center gap-2 max-w-2xl mx-auto p-4 z-10">
        {/* <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-linear-to-b from-primary dark:from-neutral-200 to-neutral-900 dark:to-neutral-600  text-center font-sans font-bold">
          Join the Movement
        </h1> */}
        <h1 className="relative text-lg md:text-5xl text-center font-sans font-bold">
          Join the Movement
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Let&apos;s create something exceptional together.
        </p>
        <Button asChild variant="default">
          <Link href="/new">
            Get Started
          </Link>
        </Button>
      </div>
      <BackgroundBeams />
    </div>
  );
}
