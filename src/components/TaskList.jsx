import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
       no tasks yet....
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TaskList;
