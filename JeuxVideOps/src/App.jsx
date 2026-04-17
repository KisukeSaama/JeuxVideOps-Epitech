import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Spaceinvaders from "./pages/Spaceinvaders";
import Twoships from "./pages/Twoships";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/spaceinvaders" element={ <Spaceinvaders /> } />
                <Route path="/twoships" element={ <Twoships /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App