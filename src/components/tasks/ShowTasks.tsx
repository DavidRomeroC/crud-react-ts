import { useFetch } from '../../hooks/useFetch';
import { useEffect } from 'react';

export const ShowTasks = () => {

    const { data, loading, error } = useFetch()

    const handleDelete = (_id: any) => {
        fetch(`http://localhost:5000/tasks/${_id}/delete`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                loading ?
                    <div>Cargando Datos</div>
                    :
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
                                data.map(({ title, description, _id }, index) => (
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
            }
        </>

    )
}
