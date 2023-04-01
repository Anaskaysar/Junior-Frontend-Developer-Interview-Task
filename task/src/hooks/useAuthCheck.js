import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

export default function useAuthCheck() {
    const disPatch = useDispatch();
    const [authChecked,setAuthChecked] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem('auth')
        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.token && auth?.user) {
                disPatch(userLoggedIn({
                    token: auth.token,
                    user:auth.user,
                }))
            }
        }
        setAuthChecked(true);
    }, [disPatch, setAuthChecked]);
    
    return authChecked;
}