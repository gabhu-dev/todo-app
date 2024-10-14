import { TaskStatus } from "./task"

export interface NewTask {
  description: string
  status: TaskStatus
  programatedAt: string
  starred: boolean
}

export interface Task extends NewTask {
  createdAt: string
  id: string
}
