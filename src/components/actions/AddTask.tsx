import { useState } from 'react';

export const AddTask = () => {

    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const handleSubmit = () => {
        fetch('http://localhost:5000/tasks/create', {
            method: "POST",
            body: JSON.stringify(task),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleChange = (e: any) => {
        e.preventDefault()
        const { value, name } = e.target
        setTask({
            ...task, [name]: value
        })
    }
    console.log(task)

    return (
        <div>
            <h3>Add Task</h3>
            <label htmlFor="title">Title</label>
            <input type="text" name='title' value={task.title} onChange={handleChange} id='title' />

            <label htmlFor="description">Description</label>
            <input type="text" name='description' value={task.description} onChange={handleChange} id='description' />
            <button onClick={handleSubmit}>Send data</button>
        </div>
    )
}
