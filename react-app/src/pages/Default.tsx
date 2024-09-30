import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Activities from "./Activities";
import Home from "./Home";
import Introduction from "./Introduction";
import Recruit from "./Recruit";
import Results from "./Results";
import Footer from "./components/footer";
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
                <Footer />
            </div>
        );
    }
}

export default Default;

//css
const styles = {
    // display: flex により、コンテナ内の要素を横並びにする
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    header: {
        height: 100,
        background: "#ddd",
    },
    // flex: 1 により、メインコンテンツが残りの高さを埋める
    main: {
        flex: 1,
    },
    footer: {
        height: 100,
        background: "#ddd",
    },
};
