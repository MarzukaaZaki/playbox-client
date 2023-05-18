import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFoundLayout from "../layouts/NotFoundLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundLayout></NotFoundLayout>
    }
])
