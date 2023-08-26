import { Route, createBrowserRouter, createRoutesFromElements, route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Location from "./pages/Location";
import React from 'react';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="/location" element={<Location />} />

        </Route>
     
    )
)

