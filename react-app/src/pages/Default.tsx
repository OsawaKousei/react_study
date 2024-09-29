import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Activities from "./Activities";
import Home from "./Home";
import Introduction from "./Introduction";
import Recruit from "./Recruit";
import Results from "./Results";
import Header from "./components/header";

class Default extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main style={styles.main}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/introduction"
                            element={<Introduction />}
                        />
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/recruit" element={<Recruit />} />
                        <Route path="/results" element={<Results />} />
                    </Routes>
                </main>
                <footer style={styles.footer}>footer</footer>
            </div>
        );
    }
}

export default Default;

//css
const styles = {
    header: {
        height: 100,
        background: "#ddd",
    },
    main: {
        height: 200,
    },
    footer: {
        height: 100,
        background: "#ddd",
    },
};
