import { defineStore } from "pinia"
import { tasksService } from "@/services"
import { NewTask, Task } from "@/@types/services"

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasksData: [] as Task[],
  }),
  getters: {
    tasks: (state) => state.tasksData,
  },
  actions: {
    async get() {
      const response = await tasksService.get()
      if (!response) return
      this.tasksData = response
    },
    async add(task: NewTask) {
      const response = await tasksService.add(task)
      if (!response) return
      this.tasksData.push(response)
    },
    async update(task: NewTask, taskId: string) {
      const response = await tasksService.update(task, taskId)
      if (!response) return
      const foundTask = this.tasksData.find((task) => task.id === taskId)
      if (!foundTask) return
    },
    async delete(taskId: string) {
      const response = await tasksService.delete(taskId)
      if (!response) return
      this.tasksData = this.tasksData.filter((task) => task.id !== taskId)
    },
  },
})
