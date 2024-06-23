import axios from "axios"
import { NewTask } from "@/@types/services"

const MOCK_API_URL = import.meta.env.VITE_MOCK_API_URL

class TasksService {
  async get() {
    try {
      const response = await axios.get(`${MOCK_API_URL}/tasks`)
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }
  async add(task: NewTask) {
    try {
      const response = await axios.post(`${MOCK_API_URL}/tasks`, { ...task })
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }
}

export const tasksService = new TasksService()
