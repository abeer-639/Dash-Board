function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        className="task-checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className="task-text">
        {task.text}
      </span>
      <button className="btn-delete" onClick={() => onDelete(task.id)}>
        delete
      </button>
    </li>
  );
}

export default TaskItem;
