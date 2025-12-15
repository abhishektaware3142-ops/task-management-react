function TaskItem({ task, toggleTask, deleteTask }) {
return (
<li className={task.completed ? 'done' : ''}>
<div>
<strong>{task.title}</strong> - <em>{task.assignee}</em>
</div>
<div className="task-buttons">
<button onClick={() => toggleTask(task.id)}>✔</button>
<button onClick={() => deleteTask(task.id)}>✖</button>
</div>
</li>
);
}


export default TaskItem;