import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';


function Home() {
const [tasks, setTasks] = useState([]);


const addTask = (title, assignee) => {
setTasks([...tasks, { id: Date.now(), title, assignee, completed: false }]);
};


const toggleTask = (id) => {
setTasks(tasks.map(t =>
t.id === id ? { ...t, completed: !t.completed } : t
));
};


const deleteTask = (id) => {
setTasks(tasks.filter(t => t.id !== id));
};


return (
<div className="container">
<TaskForm addTask={addTask} />
<TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
</div>
);
}


export default Home;