import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import CheckOut from "../Component/CheckOut/CheckOut";
import CourseDetail from "../Component/CourseDetail/CourseDetail";
import Courses from "../Component/Courses/Courses";
import FAQ from "../Component/FAQ/FAQ";
import Login from "../Component/Login/Login";
import MainHeader from "../Component/MainHeader/MainHeader";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
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
                element: <Courses></Courses>,
                loader: () => fetch('https://my-learning-server.onrender.com/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({params}) => fetch(`https://my-learning-server.onrender.com/courses/${params.id}`)
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
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://my-learning-server.onrender.com/courses/${params.id}`)
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