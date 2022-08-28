import React from "react"
import {Home} from "./Home/home"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"


export default class App extends React.Component
{
    render()
    {
        return(
            <div>
                <BrowserRouter>
                <Routes>  
                <Route path="/" element={<Home/>}/>
                </Routes>
                </BrowserRouter>
            </div>
        )
    }
}