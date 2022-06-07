import logo from './logo.svg';
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
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
         let moving = window.pageYOffset
         
         setVisible(position > moving);
         setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
  })

const cls = visible ? "visible" : "hidden";

  return (
    <>
      <div className="App">
      <header className={cls}>This is the header</header>
    </div>
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
