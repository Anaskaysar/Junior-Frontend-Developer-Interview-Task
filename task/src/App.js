import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"
import useAuthCheck from "./hooks/useAuthCheck";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import DashUsers from "./components/DashComponents/DashUsers"
import DashSales from "./components/DashComponents/DashSales"
import DashHome from "./components/DashComponents/DashHome";
function App() {
    const authChecked = useAuthCheck();

    return !authChecked ? (
        <div>Checking authentication....</div>
    ) : (
        <Router>
            <Routes>
                {/* Public Routes  */}
                <Route path="/" element={<PublicRoute> <Signin/> </PublicRoute>} />
                <Route path="/signin" element={<PublicRoute> <Signin/> </PublicRoute>} />
                <Route path="/signup" element={<PublicRoute> <Signup/> </PublicRoute>} />
                <Route path="/dashboard" element={ <DashHome/> } />
                <Route path="/dashboard/users" element={ <DashUsers/> } />
                <Route path="/dashboard/sales" element={ <DashSales/> } />
                {/* Private Routes  */}
                {/* <Route path="/dashboard" element={<PrivateRoute> <Dashboard/> </PrivateRoute>} /> */}
                <Route path="/dashboard/users" element={<PrivateRoute> <DashUsers/> </PrivateRoute>} />
                <Route path="/dashboard/sales" element={<PrivateRoute> <DashSales/> </PrivateRoute>} />
            </Routes>
        </Router>
    );
}
export default App;