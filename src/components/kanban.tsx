"use client"

import { ComponentProps, useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/kanban-base"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { GripVerticalIcon } from 'lucide-react'

interface Task {
  id: string
  title: string
  priority: "low" | "medium" | "high"
  description?: string
  assignee?: string
  assigneeAvatar?: string
  dueDate?: string
}

const COLUMN_TITLES: Record<string, string> = {
  backlog: "Team 1",
  inProgress: "Team 2",
  review: "Review",
  done: "Done",
}

interface TaskCardProps extends Omit<
  ComponentProps<typeof KanbanItem>,
  "value" | "children"
> {
  task: Task
  asHandle?: boolean
  isOverlay?: boolean
}

function TaskCard({ task, asHandle, isOverlay, ...props }: TaskCardProps) {
  const cardContent = (
    <Card>
      <CardContent className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="line-clamp-1 text-sm font-medium">{task.title}</span>
          <Badge
            variant={
              task.priority === "high"
                ? "destructive"
                : task.priority === "medium"
                  ? "default"
                  : "outline"
            }
            className="pointer-events-none h-5 shrink-0 rounded-sm px-1.5 text-xs capitalize"
          >
            {task.priority}
          </Badge>
        </div>
        <div className="text-muted-foreground flex items-center justify-between text-xs">
          {task.assignee && (
            <div className="flex items-center gap-1">
              <Avatar className="size-4">
                <AvatarImage src={task.assigneeAvatar} />
                <AvatarFallback>{task.assignee.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="line-clamp-1">{task.assignee}</span>
            </div>
          )}
          {task.dueDate && (
            <time className="text-[10px] whitespace-nowrap tabular-nums">
              {task.dueDate}
            </time>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <KanbanItem value={task.id} {...props}>
      {asHandle && !isOverlay ? (
        <KanbanItemHandle>{cardContent}</KanbanItemHandle>
      ) : (
        cardContent
      )}
    </KanbanItem>
  )
}

interface TaskColumnProps extends Omit<
  ComponentProps<typeof KanbanColumn>,
  "children"
> {
  tasks: Task[]
  isOverlay?: boolean
}

function TaskColumn({ value, tasks, isOverlay, ...props }: TaskColumnProps) {
  return (
    <KanbanColumn value={value} {...props}>
      <Card className="mb-2.5">
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-semibold">
              {COLUMN_TITLES[value]}
            </span>
            <Badge variant="outline">{tasks.length}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <KanbanColumnContent value={value} className="flex flex-col gap-2.5">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                asHandle={!isOverlay}
                isOverlay={isOverlay}
              />
            ))}
          </KanbanColumnContent>
        </CardContent>
      </Card>
    </KanbanColumn>
  )
}

export function Pattern() {
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

  const [columns, setColumns] = useState<Record<string, Task[]>>({
    backlog: [
      {
        id: "1",
        title: "Add authentication",
        priority: "high",
        assignee: "Mehdi",
        // assigneeAvatar:
        //   "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
        dueDate: today.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      },
      {
        id: "2",
        title: "Create API endpoints",
        priority: "medium",
        assignee: "Abdellah",
        // assigneeAvatar:
        //   "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
        dueDate: tomorrow.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      },
      // {
      //   id: "3",
      //   title: "Write documentation",
      //   priority: "low",
      //   assignee: "Michael Rodriguez",
      //   assigneeAvatar:
      //     "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
      //   dueDate: "Jan 20, 2025",
      // },
    ],
    inProgress: [
      {
        id: "4",
        title: "Design system updates",
        priority: "high",
        assignee: "Youssef",
        // assigneeAvatar:
        //   "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
        dueDate: today.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      },
      {
        id: "5",
        title: "Implement dark mode",
        priority: "medium",
        assignee: "Akram",
        // assigneeAvatar:
        //   "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
        dueDate: tomorrow.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      },
    ],
    // done: [
    //   {
    //     id: "7",
    //     title: "Setup project",
    //     priority: "high",
    //     assignee: "Aron Thompson",
    //     assigneeAvatar:
    //       "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80",
    //     dueDate: "Sep 25, 2025",
    //   },
    //   {
    //     id: "8",
    //     title: "Initial commit",
    //     priority: "low",
    //     assignee: "James Brown",
    //     assigneeAvatar:
    //       "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
    //     dueDate: "Sep 20, 2025",
    //   },
    // ],
  })

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard className="grid auto-rows-fr grid-cols-2">
        {Object.entries(columns).map(([columnValue, tasks]) => (
          <TaskColumn key={columnValue} value={columnValue} tasks={tasks} />
        ))}
      </KanbanBoard>
      <KanbanOverlay className="bg-muted/10 rounded-md border-2 border-dashed" />
    </Kanban>
  )
}
