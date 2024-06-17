import { TaskStatus } from "@/@types/task"

export const COLOR_STATUS: Record<TaskStatus, string> = {
  1: "gray-500",
  2: "progress",
  3: "complete",
  4: "overdue",
}
