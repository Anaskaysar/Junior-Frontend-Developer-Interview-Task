import { RouterProvider } from 'react-router-dom';
import router from "./Routes/Routes";

import useAuthCheck from "./hooks/useAuthCheck";

function App() {
    const authChecked = useAuthCheck();

    return !authChecked ? (
        <div>Checking authentication....</div>
    ) : (
        <div className='max-w-[1440px] mx-auto'>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}
export default App;