import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSumit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSumit} className="bg-slate-800 p-10 mb-4">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3184809174. */}
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2034721523. */}
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 w-full p-3 mb-2 rounded-md"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 w-full p-3 mb-2 rounded-md"
        ></textarea>

        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
