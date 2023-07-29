import { createBrowserRouter } from "react-router-dom";
import Main from '../Component/Main.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/books',
                element: <AllBooks></AllBooks>
            }

        ]
    },
]);
export default router