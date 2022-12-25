import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Saludo } from "../components/Saludo"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Saludo/>}/>
            </Routes>
        </BrowserRouter>
    )
}
