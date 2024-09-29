import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to="/">Home</Link>
                <br />
                <Link to="/introduction">introduction</Link>
                <br />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/introduction" element={<Introduction />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
