import React from 'react';
import Home from './Home';
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from './Cuisine';
import RecipeDetail from './RecipeDetail';
import Serached from './Serached';
import { AnimatePresence } from 'framer-motion';



function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.path}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/searched/:search" element={<Serached />} />
                <Route path="/recipe/:name" element={<RecipeDetail />} />
            </Routes>
        </AnimatePresence>
    )
};

export default Pages;