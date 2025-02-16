import React from "react";
import { useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function TaskDetailsPage() {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find((t) => t.id.toString() === id);

  if (!task)
    return (
      <div className="container">
        <AlertCircle size={24} className="icon-error" /> Tarefa não encontrada!
      </div>
    );

  return (
    <div className="container">
      <div className="return-button-container">
        <Link to="/" className="return-button">
          Voltar 
        </Link>
      </div>
      <div className="task-details">
        <h2>Detalhes da Tarefa</h2>
        <p>
          <strong>Id:</strong> {task.id}
        </p>

        <p>
          <strong>Título:</strong> {task.title}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {task.completed ? (
            <>
              <CheckCircle size={18} className="icon-completed" /> Concluída
            </>
          ) : (
            <>
              <Clock size={18} className="icon-pending" /> Pendente
            </>
          )}
        </p>

        <p>
          <strong>Observação:</strong>{" "}
          <span>
            {task.observation ? task.observation : "Nenhuma observação"}
          </span>
        </p>
      </div>
    </div>
  );
}