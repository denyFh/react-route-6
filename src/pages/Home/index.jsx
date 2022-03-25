// Components
import Todo from '../../components/Todo';
import Form from '../../components/Form';
// Data Example
import { Exdata } from '../../exampleData';
// React Usage
import React, { useState } from "react";
// Nanoid Library
import { nanoid } from "nanoid";
// Styling
import './style.css';

const Home = () => {
    const [tasks, setTasks] = useState(Exdata);

    console.log('reload home');

    function addTask(title) {
        const newTask = {
            id: nanoid(),
            title: title,
            completed: false
        };
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id) => {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    return (
        <div className="App">
            <h1 className='text-center'>TodoApps</h1>
            <p className='text-center'>Made By Deny Firdhaus</p>
            <hr className='text-center' style={{maxWidth: '60%'}} />
            <div className="form-container">
                <Form addTask={addTask} />
                <ul
                    className="todo-list stack-large stack-exception"
                    aria-labelledby="list-heading"
                >
                    {tasks.map(task => (
                        <Todo
                            id={task.id}
                            title={task.title}
                            completed={task.completed}
                            key={task.id}
                            deleteTask={deleteTask}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;