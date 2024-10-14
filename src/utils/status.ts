import { TaskStatus } from "@/@types/task"

export const COLOR_STATUS: Record<TaskStatus, string> = {
  1: "gray-500",
  2: "progress",
  3: "complete",
  4: "overdue",
}

export const LIST_STATUS: Record<TaskStatus, { color: string; title: string; status: TaskStatus }> =
  {
    [TaskStatus.Todo]: {
      color: "gray-500",
      title: "Todo",
      status: TaskStatus.Todo,
    },
    [TaskStatus.InProgress]: {
      color: "progress",
      title: "En Progreso",
      status: TaskStatus.InProgress,
    },
    [TaskStatus.IsCompleted]: {
      color: "complete",
      title: "Completado",
      status: TaskStatus.IsCompleted,
    },
    [TaskStatus.IsExpired]: {
      color: "overdue",
      title: "Vencidas",
      status: TaskStatus.IsExpired,
    },
  }
