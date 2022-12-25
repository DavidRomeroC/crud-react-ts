import { FC } from "react"
import { useFetch } from '../hooks/useFetch';

export const Saludo: FC = () => {

    const {data, loading, error} = useFetch()

    console.log(data, loading, error)
    return (
        <div>Saludo</div>
    )
}
