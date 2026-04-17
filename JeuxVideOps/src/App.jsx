import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Spaceinvaders from "./pages/Spaceinvaders";
import Twoships from "./pages/Twoships";

function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/spaceinvaders" element={<Spaceinvaders />} />
                <Route path="/twoships" element={<Twoships />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
}

export default App;