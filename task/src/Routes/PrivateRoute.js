import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "../contextapi/AuthContext"
function PrivateRoute({children}) {

    const {currentUser} = useAuth();
    const location = useLocation();

    if(currentUser){
        return children;
    }
    return <Navigate  to='/signin' state={{from:location}} replace >  </Navigate>
}
export default PrivateRoute;
