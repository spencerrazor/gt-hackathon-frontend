import {React, useState} from 'react';
import {Dashboard} from './components/Dashboard';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {About} from "./components/About.jsx";
import {Team} from "./components/Team.jsx";

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path: "/about",
            element: <div>Hello about</div>,
        },
        {
            path: "/team",
            element: <div>Hello about</div>,
        },
    ]);

// App.jsx
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;