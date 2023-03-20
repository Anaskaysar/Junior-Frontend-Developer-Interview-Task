import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home"
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import DashHome from "../Components/Dashboard/DashHome"
import DashUsers from "../Components/Dashboard/DashUsers"
import DashBody from "../Components/Dashboard/DashBody";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signin',
                element: <Signin/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/dashboard',
                element: <DashBody/>
            },
            {
                path: '/dashboard/users',
                element: <DashUsers/>
            }
        ]
    }
])

export default router;