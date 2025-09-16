import axios from "axios";
import type { CreateTaskRequest, Task, UpdateTaskRequest } from "../types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTasks = async () => {
  const res = await axios.get<Task[]>("/tasks");
  return res.data;
};

export const createTask = async (data: CreateTaskRequest) => {
  const res = await axios.post<Task>("/tasks", data);
  return res.data;
};

export const updateTask = async (data: UpdateTaskRequest) => {
  const res = await axios.put<Task>(`/tasks/${data.id}`, data);
  return res.data;
};

export const deleteTask = async (taskId: string) => {
  await axios.delete<Task>(`/tasks/${taskId}`);
};
