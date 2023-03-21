import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home"
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import DashoardLayout from "../Layout/DashoardLayout";
import DashUsers from "../Components/Dashboard/DashUsers"
import DashSales from "../Components/Dashboard/DashSales"
import DashHome from "../Components/Dashboard/DashHome";


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
        ]
    },{
        path:'/dashboard',
        element: <DashoardLayout/>,
        children:[
            {
                path:'/dashboard/home',
                element: <DashHome />
            },
            {
                path:'/dashboard/users',
                element: <DashUsers />
            },
            {
                path:'/dashboard/sales',
                element: <DashSales />
            }
        ]
    }
])

export default router;