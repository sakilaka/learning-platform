import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import Courses from "../Component/Courses/Courses";
import FAQ from "../Component/FAQ/FAQ";
import Login from "../Component/Login/Login";
import MainHeader from "../Component/MainHeader/MainHeader";
import Register from "../Component/Register/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <p>f</p>,
        children: [
            {
                path: '/',
                element: <MainHeader></MainHeader>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);