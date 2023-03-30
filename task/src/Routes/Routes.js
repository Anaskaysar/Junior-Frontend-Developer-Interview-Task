import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import Dashboard from "../pages/Dashboard";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import DashHome from "../components/DashComponents/DashHome"
import DashUsers from "../components/DashComponents/DashUsers"
import DashSales from "../components/DashComponents/DashSales"
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoute><Home/></PublicRoute> , 
        children: [
            {
                path: '/signin',
                element: <PublicRoute><Signin/></PublicRoute>
            },
            {
                path: '/signup',
                element: <PublicRoute><Signup/></PublicRoute>
            },
        ]
    },{
        path:'/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
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