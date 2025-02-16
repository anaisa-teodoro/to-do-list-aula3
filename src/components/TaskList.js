import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks, filter, setFilter } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <div className="filters">
        <button
          className={`filter-button ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          Todas
        </button>
        <button
          className={`filter-button ${filter === "active" ? "active" : ""}`}
          onClick={() => setFilter("active")}
        >
          Pendentes
        </button>
        <button
          className={`filter-button ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Concluídas
        </button>
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}