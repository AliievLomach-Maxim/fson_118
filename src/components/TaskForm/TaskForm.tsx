import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./TaskForm.module.css";
import { createTask } from "../../services/taskService";
import { CreateTaskRequest } from "../../types/task";

export default function TaskForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTask: CreateTaskRequest) => createTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleSubmit = (formData: FormData) => {
    const text = formData.get("text") as string;
    mutation.mutate({ text });
  };
  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button}>
        Create
      </button>
    </form>
  );
}
