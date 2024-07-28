import React from 'react';
import Home from './Pages/Home';
import HeaderBar from './Components/HeaderBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <HeaderBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;