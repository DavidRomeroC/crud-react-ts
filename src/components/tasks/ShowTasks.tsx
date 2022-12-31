import { getDataTasks } from '../../helper/fetchTasks';
import { useState, useEffect } from 'react';

export const ShowTasks = ({setUpdate, update }: any) => {

    const [resData, setResData] = useState([])

    useEffect(() => {
        getDataTasks()
            .then(tasks => setResData(tasks))
            .catch(err => console.log(err))
    }, [update])

    const handleDelete = (_id: any) => {
        fetch(`http://localhost:5000/tasks/${_id}/delete`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setUpdate(!update)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Tarea</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resData.map(({ title, description, _id }, index) => (
                            <tr key={_id}>
                                <td>{++index}</td>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td>
                                    <button>Hecho</button>
                                    <button>Editar</button>
                                    <button onClick={() => handleDelete(_id)}>Borrar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>

    )
}
