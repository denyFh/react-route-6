import { useState } from "react";

const Todo = (props) => {
    const [completed, setCompleted] = useState(props.completed);

    const handleChange = (e) => {
        setCompleted(e.target.checked);
    }

    return (
        <li className="todo stack-small">
            <div className="c-cb text-center" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={completed}
                    disabled={completed}
                    onChange={handleChange}
                />
                <label
                    className={`todo-label ${completed ? 'true' : ''}`}
                    htmlFor={props.id}>
                    {props.title}
                </label>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default Todo;