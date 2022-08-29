import React from "react"
import { Home } from "./Home/home"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./login"


export default class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}