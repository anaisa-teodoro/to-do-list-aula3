import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskForm({ editTask }) {
  const [text, setText] = useState(editTask ? editTask.title : "");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ title: text, completed: false });
    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar nova tarefa..."
      />
      <button type="submit" className="form-button">
        {editTask ? "Salvar" : "Adicionar Tarefa"}
      </button>
    </form>
  );
}