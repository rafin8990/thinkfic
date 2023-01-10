import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Login from "../Login/Login";
import Payment from "../Payment/Payment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>,
            }
        ])
    }
])