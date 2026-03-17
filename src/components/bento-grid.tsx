"use client";

/**
 * @author: @dorianbaffier
 * @description: Bento Grid
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Plus,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  type Variants,
} from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SpotlightCard from "./spotlight-card";
import { Icons } from "./icons/icons";
import { useTheme } from "next-themes";

interface BentoItem {
  id: string;
  title: string;
  description: string;
  icons?: boolean;
  href?: string;
  feature?:
  | "chart"
  | "counter"
  | "code"
  | "timeline"
  | "spotlight"
  | "icons"
  | "typing"
  | "metrics";
  spotlightItems?: string[];
  timeline?: Array<{ year: string; event: string }>;
  code?: string;
  codeLang?: string;
  typingText?: string;
  metrics?: Array<{
    label: string;
    value: number;
    suffix?: string;
    color?: "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5";
  }>;
  statistic?: {
    value: string;
    label: string;
    start?: number;
    end?: number;
    suffix?: string;
  };
  size?: "sm" | "md" | "lg";
  className?: string;
}

const bentoItems: BentoItem[] = [
  {
    id: "main",
    title: "Building for tomorrow",
    description:
      "We go the extra mile, because you deserve it",
    href: "#",
    feature: "spotlight",
    spotlightItems: [
      "Microservices architecture",
      "Serverless computing",
      "Container orchestration",
      "API-first design",
      "Event-driven systems",
    ],
    size: "lg",
    className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
  },
  {
    id: "stat1",
    title: "AI Agents & Automation",
    description:
      "Intelligent agents that learn, adapt, and automate complex workflows",
    href: "#",
    feature: "typing",
    typingText:
      "const createAgent = async () => {\n  const agent = new AIAgent({\n    model: 'gpt-4-turbo',\n    tools: [codeAnalysis, dataProcessing],\n    memory: new ConversationalMemory()\n  });\n\n  // Train on domain knowledge\n  await agent.learn(domainData);\n\n  return agent;\n};",
    size: "md",
    className: "col-span-2 row-span-1 col-start-1 col-end-3",
  },
  {
    id: "stack",
    title: "Tried and True",
    description:
      "We can build with any stack. But put a gun to our heads, and these are the ones we'd choose",
    icons: true,
    href: "#",
    feature: "icons",
    size: "md",
    className: "col-span-1 row-span-1",
  },
  {
    id: "innovation",
    title: "Innovation timeline",
    description:
      "Pioneering the future of AI",
    href: "#",
    feature: "timeline",
    timeline: [
      { year: "Discovery", event: "We dive deep to understand your goals, users, and vision" },
      { year: "Planning", event: "We map out the strategy, timeline, and technical roadmap" },
      { year: "Build", event: "We bring your ideas to life with clean, scalable code" },
      { year: "Ship", event: "We deploy, monitor, and make sure everything runs smoothly", },
    ],
    // [
    //   { stage: "Discovery", description: "We get to know you, your goals, and your wildest ideas." },
    //   { stage: "Plan", description: "We map out the game plan, sketch the magic, and connect the dots." },
    //   { stage: "Build", description: "We code, craft, and conjure your product into reality." },
    //   { stage: "Launch", description: "We blast it off, celebrate the wins, and watch it soar." },
    // ]
    size: "sm",
    className: "col-span-1 row-span-1",
  },
  // {
  //   id: "uptime",
  //   title: "99.99% Uptime",
  //   description: "Reliable and resilient infrastructure for mission-critical applications",
  //   href: "#",
  //   feature: "metrics",
  //   metrics: [
  //     { label: "Uptime", value: 99.99, suffix: "%", color: "chart-1" },
  //     { label: "Response time", value: 120, suffix: "ms", color: "chart-2" },
  //     { label: "Cost reduction", value: 45, suffix: "%", color: "chart-3" },
  //   ],
  // },
  // {
  //   id: "automation",
  //   title: "Intelligent Automation",
  //   description:
  //     "Automate complex workflows and processes with intelligent agents that learn and adapt to your needs.",
  //   href: "#",
  //   feature: "counter",
  //   statistic: {
  //     value: "85%",
  //     label: "Workflow automation",
  //     start: 0,
  //     end: 85,
  //     suffix: "%",
  //   },
  // },
  //   {
  //     id: "code",
  //     title: "AI-Powered Code Generation",
  //     description:
  //       "Accelerate development with AI that generates clean, efficient code based on your specifications.",
  //     href: "#",
  //     feature: "code",
  //     code: `import { CodeGenerator } from 'kokonut-ai';
  // `,
  //     codeLang: "typescript",
  //   }
];

/*
    | "chart"
    | "counter"
    | "code"
    // | "timeline"
    // | "spotlight"
    // | "icons"
    // | "typing"
    // | "metrics";
*/

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const SpotlightFeature = ({ items }: { items: string[] }) => (
  <ul className="mt-2 space-y-1.5">
    {items.map((item, index) => (
      <motion.li
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -10 }}
        key={`spotlight-${item.toLowerCase().replace(/\s+/g, "-")}`}
        transition={{ delay: 0.1 * index }}
      >
        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
        <span className="text-muted-foreground text-sm">
          {item}
        </span>
      </motion.li>
    ))}
  </ul>
);

const CounterAnimation = ({
  start,
  end,
  suffix = "",
}: {
  start: number;
  end: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    let currentFrame = 0;
    const counter = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easedProgress = 1 - (1 - progress) ** 3;
      const current = start + (end - start) * easedProgress;

      setCount(Math.min(current, end));

      if (currentFrame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [start, end]);

  return (
    <div className="flex items-baseline gap-1">
      <span className="font-bold text-3xl text-foreground">
        {count.toFixed(1).replace(/\.0$/, "")}
      </span>
      <span className="font-medium text-foreground text-xl">
        {suffix}
      </span>
    </div>
  );
};

const ChartAnimation = ({ value }: { value: number }) => (
  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
    <motion.div
      animate={{ width: `${value}%` }}
      className="h-full rounded-full bg-primary"
      initial={{ width: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  </div>
);

const iconMap = [
  // { "tool": "TypeScript", "icon": <Icons.ts className="h-7 w-7 transition-transform" />, },
  { "tool": "Next.js", "icon": <Icons.nextjs className="h-7 w-7 transition-transform" />, },
  { "tool": "React Native", "icon": <Icons.react className="h-7 w-7 transition-transform" />, },
  { "tool": "Spring", "icon": <Icons.spring className="h-7 w-7 transition-transform" />, },
  // { "tool": "Java", "icon": <Icons.java className="h-7 w-7 transition-transform" />, },
  { "tool": "PostgreSQL", "icon": <Icons.postgresql className="h-7 w-7 transition-transform" />, },
  { "tool": "Docker", "icon": <Icons.docker className="h-7 w-7 transition-transform" />, },
  { "tool": "Dokploy", "icon": <Icons.dokploy className="h-7 w-7 transition-transform" />, },
  { "tool": "PostHog", "icon": <Icons.posthog className="h-7 w-7 transition-transform" />, },
  { "tool": "MinIO", "icon": <Icons.minio className="h-7 w-7 transition-transform" />, },
]

const IconsFeature = () => (
  <div className="mt-4 grid grid-cols-4 gap-4">
    {iconMap.map(item => (
      <motion.div key={item.tool} className="group flex flex-col items-center gap-2 rounded-md border border-border/60 bg-linear-to-b from-card to-muted/70 p-3 transition-all duration-300 hover:border-border hover:from-card hover:to-muted">
        <div className="relative flex h-8 w-8 items-center justify-center">
          {item.icon}
        </div>
        <span className="text-center font-medium text-muted-foreground text-xs">
          {item.tool}
        </span>
      </motion.div>
    ))}
  </div>
);

const TimelineFeature = ({
  timeline,
}: {
  timeline: Array<{ year: string; event: string }>;
}) => (
  <div className="relative mt-3">
    <div className="absolute top-0 bottom-0 left-2.25 w-0.5 bg-border" />
    {timeline.map((item) => (
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className="relative mb-3 flex gap-3"
        initial={{ opacity: 0, x: -10 }}
        key={`timeline-${item.year}-${item.event
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        transition={{
          delay: (0.15 * Number.parseInt(item.year)) % 10,
        }}
      >
        <div className="z-10 mt-0.5 h-5 w-5 shrink-0 rounded-full border-2 border-border bg-card" />
        <div>
          <div className="font-medium text-foreground text-sm">
            {item.year}
          </div>
          <div className="text-muted-foreground text-xs">
            {item.event}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const TypingCodeFeature = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);

          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        },
        Math.random() * 30 + 10
      ); // Random typing speed for realistic effect

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  // Reset animation when component unmounts and remounts
  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative mt-3">
      <div className="mb-2 flex items-center gap-2">
        <div className="text-muted-foreground text-xs">
          server.ts
        </div>
      </div>
      <div
        className="h-37.5 overflow-y-auto rounded-md border border-border bg-card p-3 font-mono text-card-foreground text-xs"
        ref={terminalRef}
      >
        <pre className="font-mono whitespace-pre-wrap">
          {displayedText}
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    </div>
  );
};

const MetricsFeature = ({
  metrics,
}: {
  metrics: Array<{
    label: string;
    value: number;
    suffix?: string;
    color?: "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5";
  }>;
}) => {
  const getColorClass = (color: "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5" = "chart-1") => {
    const colors = {
      "chart-1": "bg-chart-1",
      "chart-2": "bg-chart-2",
      "chart-3": "bg-chart-3",
      "chart-4": "bg-chart-4",
      "chart-5": "bg-chart-5",
    };
    return colors[color] || colors["chart-1"];
  };

  return (
    <div className="mt-3 space-y-3">
      {metrics.map((metric, index) => (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="space-y-1"
          initial={{ opacity: 0, y: 10 }}
          key={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}
          transition={{ delay: 0.15 * index }}
        >
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5 font-medium text-foreground/90">
              {metric.label === "Uptime" && <Clock className="h-3.5 w-3.5" />}
              {metric.label === "Response time" && (
                <Zap className="h-3.5 w-3.5" />
              )}
              {metric.label === "Cost reduction" && (
                <Sparkles className="h-3.5 w-3.5" />
              )}
              {metric.label}
            </div>
            <div className="font-semibold text-foreground/90">
              {metric.value}
              {metric.suffix}
            </div>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              animate={{
                width: `${Math.min(100, metric.value)}%`,
              }}
              className={`h-full rounded-full ${getColorClass(metric.color)}`}
              initial={{ width: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.15 * index,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const BentoCard = ({ item }: { item: BentoItem }) => {
  const [, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [2, -2]);
  const rotateY = useTransform(x, [-100, 100], [-2, 2]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      className="h-full"
      onHoverEnd={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      variants={fadeInUp}
    // whileHover={{ y: -5 }}
    >
      <Link
        aria-label={`${item.title} - ${item.description}`}
        className="group block h-full"
        href={item.href || "#"}
        tabIndex={0}
      >
        <SpotlightCard className={`group block h-full bg-background p-5 ${item.className}`} spotlightColor={resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(58, 79, 122, 0.25)"}>
          <div
            className="relative z-10 flex h-full flex-col gap-3"
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="flex flex-1 flex-col space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground text-xl tracking-tight transition-colors duration-300 group-hover:text-foreground/80">
                  {item.title}
                </h3>
                <div className="text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <p className="text-muted-foreground text-sm tracking-tight">
                {item.description}
              </p>

              {/* Feature specific content */}
              {item.feature === "spotlight" && item.spotlightItems && (
                <SpotlightFeature items={item.spotlightItems} />
              )}

              {item.feature === "counter" && item.statistic && (
                <div className="mt-auto pt-3">
                  <CounterAnimation
                    end={item.statistic.end || 100}
                    start={item.statistic.start || 0}
                    suffix={item.statistic.suffix}
                  />
                </div>
              )}

              {item.feature === "chart" && item.statistic && (
                <div className="mt-auto pt-3">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-medium text-muted-foreground text-sm">
                      {item.statistic.label}
                    </span>
                    <span className="font-medium text-muted-foreground text-sm">
                      {item.statistic.end}
                      {item.statistic.suffix}
                    </span>
                  </div>
                  <ChartAnimation value={item.statistic.end || 0} />
                </div>
              )}

              {item.feature === "timeline" && item.timeline && (
                <TimelineFeature timeline={item.timeline} />
              )}

              {item.feature === "icons" && <IconsFeature />}

              {item.feature === "typing" && item.typingText && (
                <TypingCodeFeature text={item.typingText} />
              )}

              {item.feature === "metrics" && item.metrics && (
                <MetricsFeature metrics={item.metrics} />
              )}

              {item.feature === "code" && item.code && item.codeLang && (
                <div className="mt-2 rounded-md border border-border bg-card p-3 font-mono text-card-foreground text-xs">
                  <pre className="whitespace-pre-wrap">{item.code}</pre>
                </div>
              )}
            </div>
          </div>
        </SpotlightCard>
      </Link>
    </motion.div>
  );
};

export default function BentoGrid() {
  return (
    // <section className="relative overflow-hidden py-24 sm:py-32">
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bento Grid */}
        <motion.div
          className="grid gap-6"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <div className="grid gap-6 md:grid-cols-5">
            <motion.div className="md:col-span-2" variants={fadeInUp}>
              <BentoCard item={bentoItems[0]} />
            </motion.div>
            <motion.div className="md:col-span-3" variants={fadeInUp}>
              <BentoCard item={bentoItems[1]} />
            </motion.div>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            <motion.div className="md:col-span-3" variants={fadeInUp}>
              <BentoCard item={bentoItems[2]} />
            </motion.div>
            <motion.div className="md:col-span-2" variants={fadeInUp}>
              <BentoCard item={bentoItems[3]} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
