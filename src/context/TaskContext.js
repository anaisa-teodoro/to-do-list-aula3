import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await api.get("/tarefas");
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    }
  };

  const addTask = async (task) => {
    try {
      if (!task.title?.trim()) {
        throw new Error("O título da tarefa não pode estar vazio");
      }
      const response = await api.post("/tarefas", task);
      setTasks([...tasks, response.data]);
      return { success: true };
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    }
  };

  const editTask = async (id, updatedTask) => {
    try {
      if (!updatedTask.title?.trim()) {
        throw new Error("O título da tarefa não pode estar vazio");
      }
      await api.put(`/tarefas/${id}`, updatedTask);
      setTasks(
        tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
      );
      return { success: true };
    } catch (error) {
      console.error("Erro ao editar tarefa:", error);
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tarefas/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
      return { success: true };
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    }
  };

  const toggleComplete = async (id) => {
    try {
      const task = tasks.find((task) => task.id === id);
      await api.patch(`/tarefas/${id}`, { completed: !task.completed });
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
      return { success: true };
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
        setFilter,
        addTask,
        editTask,
        deleteTask,
        toggleComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);