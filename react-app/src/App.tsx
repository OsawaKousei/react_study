import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//screens
import Default from "./pages/Default";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Default />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
