"use client";

import { Folder, LayoutDashboard, Cloud } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card } from "./ui/card";
import { Terminal } from "./terminal";
import { useState } from "react";
import { Pattern } from "./kanban";
import { cn } from "@/lib/utils";

export default function Approach() {
  const [active, setActive] = useState("item-0");
  return (
    <div>
      <div className="max-w-7xl flex justify-center px-6 lg:px-8 pb-12 mx-auto">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12">

          <Card className={cn(
            "flex-1 min-h-64 bg-transparent p-0",
            active !== "item-0" && "border-transparent",
          )}>
            {active === "item-0" ? (
              // TODO: add auto reload to component, currently restarts on mouse in
              <Terminal
                command="pnpx create-avycenna-app@latest cool-project"
                steps={[
                  { text: "> Project name", bold: true },
                  { text: " | cool-project" },
                  { text: " | cd cool-project" },
                  { text: "> Installing UI components", bold: true },
                  { text: " | ✓ @avycenna/ui" },
                  { text: " | ✓ @avycenna/factory" },
                  { text: "> Configuring dev setup", bold: true },
                  { text: " | ✓ ORM" },
                  { text: " | ✓ Auth" },
                  { text: " | ✓ Multitenancy" },
                  { text: " | ✓ i18n" },
                ]}
                pulseInterval={100}
                showLocalhost={true}
                hostBarTitle="localhost:3000"
                hostMessage="New App Created!"
              />
            ) : active === "item-1" ? (
              <Pattern />
            ) : active === "item-2" ? (
              // <Cloud />
              <Pattern />
            ) : null}
          </Card>

          <Accordion
            type="single"
            defaultValue="item-0"
            className="flex-1 py-8"
            value={active}
            onValueChange={setActive}
          >
            <AccordionItem value="item-0">
              <AccordionTrigger className="text-xl md:text-2xl font-bold">
                <span className="flex items-center gap-3">
                  <Folder className="fill-current stroke-0 text-primary" /> Custom Stack
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Our projects are scaffolded using our custom CLI tool,
                <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">
                  create-avycenna-app
                </code>.
                This tool sets up a new project with all the necessary configurations and dependencies, allowing us to hit the ground running and focus on building your application. Always running and focus on building your application.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-2xl font-bold">
                <span className="flex items-center gap-3">
                  <LayoutDashboard className="fill-current stroke-0 text-primary" /> Blitz Methodology
                </span>
              </AccordionTrigger>
              <AccordionContent>
                We use our own version of Agile, which we call Blitz. It&apos;s a flexible and iterative approach that allows us to adapt to changing requirements and deliver value quickly. We break down projects into small, manageable sprints, and we prioritize communication and collaboration with our clients throughout the process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-2xl font-bold">
                <span className="flex items-center gap-3">
                  <Cloud className="fill-current stroke-0 text-primary" /> Private Cloud
                </span>
              </AccordionTrigger>
              <AccordionContent>
                We manage our infrusture using Dokploy, our in-house private cloud solution. Dokploy allows us to deploy and manage applications and services with ease, while ensuring security, scalability, and reliability. By using our own private cloud, we can maintain full control over our infrastructure and provide a seamless experience for our clients.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </div>
    </div>
  );
}
