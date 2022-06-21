import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import ReactDOM from "react-dom";
import Result from "./pages/Result";

function App() {
    const [resultData, setResultData] = useState({});

    const inputHandlerApp = (inputDataApp) => {
        setResultData(inputDataApp);
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home inputHandlerApp={inputHandlerApp} />}
                    />
                    <Route
                        path="/report"
                        element={<Result data={resultData} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
