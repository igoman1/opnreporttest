import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Header from "./layout/WhiteHeader";
import Home from "./pages/Home";
import Menu from "./layout/Menu";
import ReactDOM from "react-dom";
import Result from "./pages/Result";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/report" element={<Result />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
