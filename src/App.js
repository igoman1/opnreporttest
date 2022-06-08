import './App.css';
import Header from './layout/WhiteHeader';
import Menu from './layout/Menu';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./App.css";


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
