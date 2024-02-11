import {React, useState} from 'react';
import {Dashboard} from './components/Dashboard';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Team} from "./components/Team.jsx";
import {Mission} from "./components/Mission.jsx";
import {Landing} from "./components/Landing.jsx";

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/start",
            element: <Dashboard />,
        },
        {
            path: "/team",
            element: <Team/>,
        },
        {
            path: "/mission",
            element: <Mission/>,
        },
        {
            path: "/",
            element: <Landing/>
        }
    ]);

// App.jsx
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;