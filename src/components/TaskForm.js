import { useState } from 'react';


function TaskForm({ addTask }) {
const [task, setTask] = useState('');
const [assignee, setAssignee] = useState('');


const handleSubmit = (e) => {
e.preventDefault();
if (task.trim() === '' || assignee.trim() === '') return;
addTask(task, assignee);
setTask('');
setAssignee('');
};


return (
<form onSubmit={handleSubmit} className="task-form">
<input
type="text"
placeholder="Enter task"
value={task}
onChange={(e) => setTask(e.target.value)}
/>
<input
type="text"
placeholder="Assign to"
value={assignee}
onChange={(e) => setAssignee(e.target.value)}
/>
<button>Add</button>
</form>
);
}


export default TaskForm;