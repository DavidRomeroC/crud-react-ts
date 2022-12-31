import { ShowTasks } from "../components"
import { AddTask } from '../components/actions/AddTask';
import { useState } from 'react';

export const HomePage = () => {

    const [update, setUpdate] = useState<any>(false)

    return (
        <>
            <AddTask setUpdate={setUpdate} update={update} />
            <ShowTasks setUpdate={setUpdate} update={update} />
        </>
    )
}
