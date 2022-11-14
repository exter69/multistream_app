import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Multistream from "./pages/Multistream";
import Like from "./pages/Like";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path={"home"} element={<Hero/>}/>
                <Route path={"*"} element={<Hero/>}/>
                <Route path={"multistream"} element={<Multistream/>}/>
                <Route path={"like"} element={<Like/>}/>
                <Route path={"contact"} element={<Contact/>}/>
            </Routes>

        </BrowserRouter>
);


