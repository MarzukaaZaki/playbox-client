import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFoundLayout from "../layouts/NotFoundLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

        ]
    },
    {
        path: '*',
        element: <NotFoundLayout></NotFoundLayout>
    }
])
