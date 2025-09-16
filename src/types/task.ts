export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface CreateTaskRequest {
  text: string;
}

export interface UpdateTaskRequest {
  id: string;
  text?: string;
  completed?: boolean;
}
