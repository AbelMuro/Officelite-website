import React from 'react';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import HeaderBar from './Components/HeaderBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <HeaderBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/SignUp' element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;