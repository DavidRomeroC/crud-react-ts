import { useEffect, useState } from "react"

interface DataFetch {
    data: any;
    loading: boolean;
    error: any
}

export const useFetch = () => {
    const [data, setData] = useState<DataFetch>({
        data: [],
        loading: true,
        error: null
    })

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setData({
                data,
                loading: false,
                error: null
            }))
            .catch(err => setData({
                data: [],
                loading: false,
                error: err
            }))
    }, [])

    return data
}
