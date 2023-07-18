import * as Pages from '../pages'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoute';
import { useSelector } from 'react-redux';


const authRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Pages.Layout />}>
       {AuthRoutes()}
    </Route>
))


const mainRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Pages.Layout />}>
       {MainRoutes()}
    </Route>
))


function MyRoutes() {
    const userData = useSelector(state => state?.auth)
    console.log("userDatauserData",userData)


    return (
        <div>
            {!!userData?.isLogin? <RouterProvider router={mainRoutes} /> :<RouterProvider router={authRoutes} />  }
        </div>
    )
}

export default MyRoutes;
