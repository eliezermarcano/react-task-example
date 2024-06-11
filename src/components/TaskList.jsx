import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

  const { tasks } = useContext(TaskContext);

// Suggested code may be subject to a license. Learn more: ~LicenseLog:4095393889.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3744069284.
  if (tasks.length === 0) return <div className="text-white text-4xl fond-bold text-center ">No hay tareas aún</div>;

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
