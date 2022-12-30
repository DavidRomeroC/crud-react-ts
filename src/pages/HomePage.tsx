import { ShowTasks } from "../components"
import { AddTask } from '../components/actions/AddTask';

export const HomePage = () => {
    return (
        <>
            <AddTask/>
            <ShowTasks />
        </>
    )
}
