import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import { Save, Edit2, Trash2, CheckCircle2 } from "lucide-react";

export default function TaskItem({ task }) {
  const { toggleComplete, deleteTask, editTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.title);
  const [editedObservation, setEditedObservation] = useState(task.observation || "");

  const handleEdit = async () => {
    if (isEditing) {
      await editTask(task.id, { title: editedText, observation: editedObservation });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="task-content">
          <input
            type="text"
            className="form-input"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <input
            type="text"
            className="form-input"
            value={editedObservation}
            onChange={(e) => setEditedObservation(e.target.value)}
            placeholder="Descrição"
          />
        </div>
      ) : (
        <div className="task-content">
          <Link to={`/task/${task.id}`} className="task-title">
            {task.title}
          </Link>
          {task.observation && <p className="task-observation">{task.observation}</p>}
        </div>
      )}
      <div className="task-actions">
        <button
          className={`icon-button complete-button ${task.completed ? "completed" : ""}`}
          onClick={() => toggleComplete(task.id)}
        >
          <CheckCircle2 size={18} strokeWidth={2} />
        </button>
        <button className="icon-button" onClick={handleEdit}>
          {isEditing ? <Save size={18} strokeWidth={2} /> : <Edit2 size={18} strokeWidth={2} />}
        </button>
        <button className="icon-button" onClick={() => deleteTask(task.id)}>
          <Trash2 size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}