import { useState } from "react";

const Form = (props) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === '') {
            alert("Anda harus mengisi inputan terlebih dahulu sebelum submit")
        } else {
            props.addTask(title);
        }
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                placeholder='Tambah tugas disini...'
                value={title}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default Form;