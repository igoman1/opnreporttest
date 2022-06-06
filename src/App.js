import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Menu from './layout/Menu';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';

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

export default App;
