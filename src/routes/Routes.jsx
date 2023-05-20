import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFoundLayout from "../layouts/NotFoundLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element: <About></About>

            },
            {
                path:'/blog',
                element: <Blog></Blog>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/addtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundLayout></NotFoundLayout>
    }
])
