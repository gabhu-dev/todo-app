import axios from "axios"

const MOCK_API_URL = import.meta.env.VITE_MOCK_API_URL

class TasksService {
  async get() {
    try {
      const response = await axios.get(`${MOCK_API_URL}/v1/tasks`)
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }
  async add() {
    try {
      const response = await axios.post(`${MOCK_API_URL}/v1/tasks`)
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }
}

export const tasksService = new TasksService()
