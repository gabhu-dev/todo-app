import axios from "axios"
import { NewTask, Task } from "@/@types/services"

const MOCK_API_URL = import.meta.env.VITE_MOCK_API_URL

class TasksService {
  async get() {
    try {
      const response = await axios.get<Task[]>(`${MOCK_API_URL}/tasks`)
      console.log(response)
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
  async add(task: NewTask) {
    try {
      const response = await axios.post<Task>(`${MOCK_API_URL}/tasks`, { ...task })
      console.log(response)
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
  async update(task: NewTask, taskId: string) {
    try {
      const response = await axios.put(`${MOCK_API_URL}/tasks/${taskId}`, { ...task })
      console.log(response)
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
  async delete(taskId: string) {
    try {
      const response = await axios.delete(`${MOCK_API_URL}/tasks/${taskId}`)
      console.log(response)
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
}

export const tasksService = new TasksService()
