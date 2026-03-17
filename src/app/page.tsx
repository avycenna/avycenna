import { CtaSection } from "@/components/cta";
import BentoGrid from "@/components/bento-grid";
import { Heading } from "@/components/layout";
import Approach from "@/components/approach";
import Testimonials from "@/components/testimonials";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { LightRays } from "@/components/ui/light-rays";
import { Anchor, ArrowRight, Database } from "lucide-react";
import Link from "next/link";
import LogoMarquee from "@/components/icons/logo-marquee";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full min-h-screen relative">

      <div className="relative flex flex-col gap-8 items-center w-full h-full min-h-[120vh] pb-16 pt-24">
        <div className="flex items-center mx-auto">
          <Link
            href="https://opendata.avycenna.com/"
            target="_blank"
            className="relative hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
            {/* <span className="text-foreground text-sm">Introducing Flowt by Avycenna</span> */}
            <span className="text-foreground text-sm">Introducing Open Data by Avycenna</span>
            {/* <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span> */}

            <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
              <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
                {/* <span className="flex size-6"><Anchor className="m-auto size-3" /></span> */}
                <span className="flex size-6"><Database className="m-auto size-3" strokeWidth={3} /></span>
              </div>
            </div>
            <BorderBeam
              duration={6}
              size={50}
              className="from-primary via-primary to-transparent"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4">
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"> */}
          <h1 className="max-w-[80vw] lg:max-w-[70vw] text-balance text-center text-3xl font-medium md:text-7xl tracking-tight">
            Tech as Second Nature in Morocco and Beyond
          </h1>
          <p className="max-w-[80vw] lg:max-w-[70vw] text-balance text-center lg:text-start text-lg text-muted-foreground">
            Avycenna makes digital transformation effortless.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Button variant="default">
              Discuss Your Project
            </Button>
            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <LightRays />
      </div>

      <Heading
        title="Our Team&apos;s Track Record"
        caption="Join organizations already growing with us"
      />
      {/* <LogoCloud /> */}
      <LogoMarquee />


      <Heading
        title="Tech stuff you didn't ask for"
        caption="But secretly love to see anyway"
      />
      <BentoGrid />

      <Heading
        title="We do things differently"
        caption="Thanks to our proprietary engineering foundation"
      />
      <Approach />

      {/* <Heading
        title="We love you too"
        caption="But don&apos;t just take our word for it"
      />
      <Testimonials /> */}

      <CtaSection />
      {/* <CtaSections /> */}
    </div>
  );
}
