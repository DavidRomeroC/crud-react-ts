import { useFetch } from '../../hooks/useFetch';

export const ShowTasks = () => {

    const { data, loading, error } = useFetch()

    console.log(data)

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
                                        <td><button>Hecho</button><button>Editar</button><button>Borrar</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </>

    )
}
