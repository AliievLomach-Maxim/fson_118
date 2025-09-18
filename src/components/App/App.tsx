import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { getTasks } from "../../services/taskService";
import css from "./App.module.css";
import { useDebouncedCallback } from "use-debounce";
import SearchBox from "../SearchBox/SearchBox";
import useToggle from "../../hooks/useToggle";

export default function App() {
  const [isModalOpen, openModal, closeModal] = useToggle();

  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["tasks", searchValue],
    queryFn: () => getTasks(searchValue),
  });

  // const handleSearch = useDebouncedCallback(setSearchValue, 500);
  const handleSearch = useDebouncedCallback((val: string) => {
    setSearchValue(val);
  }, 500);

  return (
    <div className={css.container}>
      <SearchBox value={searchValue} onSearch={handleSearch} />
      <header className={css.header}>
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>

      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}

      {data && !isLoading && <TaskList tasks={data} />}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm />
        </Modal>
      )}
    </div>
  );
}
