import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home"
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import DashoardLayout from "../Layout/DashoardLayout";
import DashUsers from "../Components/Dashboard/DashUsers"
import DashSales from "../Components/Dashboard/DashSales"
import DashHome from "../Components/Dashboard/DashHome";
import PrivateRoute from "./PrivateRoute";


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
        element: <PrivateRoute><DashoardLayout/></PrivateRoute>,
        children:[
            {
                path:'/dashboard/home',
                element: <PrivateRoute><DashHome /></PrivateRoute>
            },
            {
                path:'/dashboard/users',
                element: <PrivateRoute> <DashUsers /> </PrivateRoute> 
            },
            {
                path:'/dashboard/sales',
                element: <PrivateRoute> <DashSales /> </PrivateRoute> 
            }
        ]
    }
])

export default router;