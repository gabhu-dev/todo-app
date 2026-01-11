import { defineStore } from "pinia"
import { tasksService } from "@/services"
import { NewTask, Task } from "@/@types/services"
import { TaskStatus } from "@/@types/task"

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasksData: [] as Task[],
    filters: {
      search: "",
      status: null as TaskStatus | null,
    },
  }),
  getters: {
    tasks: (state) => state.tasksData,
    filteredTasks: (state) => {
      return state.tasksData.filter((task) => {
        const matchSearch = task.description
          .toLowerCase()
          .includes(state.filters.search.toLowerCase())
        const matchStatus = state.filters.status === null || task.status === state.filters.status
        return matchSearch && matchStatus
      })
    },
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
      const foundIndex = this.tasksData.findIndex((task) => task.id === taskId)
      if (foundIndex !== -1) {
        this.tasksData[foundIndex] = { ...this.tasksData[foundIndex], ...response }
      }
    },
    async updateStar(starred: boolean, taskId: string) {
      const task = this.tasksData.find((task) => task.id === taskId)
      if (!task) return
      const response = await tasksService.update({...task, starred}, taskId)
      if (!response) return
      const foundIndex = this.tasksData.findIndex((task) => task.id === taskId)
      if (foundIndex !== -1) {
        this.tasksData[foundIndex] = { ...this.tasksData[foundIndex], ...response }
      }
    },
    async updateStatus(status: TaskStatus, taskId: string) {
      const task = this.tasksData.find((task) => task.id === taskId)
      if (!task) return
      const response = await tasksService.update({...task, status}, taskId)
      if (!response) return
      const foundIndex = this.tasksData.findIndex((task) => task.id === taskId)
      if (foundIndex !== -1) {
        this.tasksData[foundIndex] = { ...this.tasksData[foundIndex], ...response }
      }
    },
    async delete(taskId: string) {
      const response = await tasksService.delete(taskId)
      if (!response) return
      this.tasksData = this.tasksData.filter((task) => task.id !== taskId)
    },
  },
})
