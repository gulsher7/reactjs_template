import * as Pages from '../pages'
import {Route} from "react-router-dom";

function AuthRoutes() {
    return (
        <>
            <Route index element={<Pages.Signup />} />
            <Route path='login' element={<Pages.Login />} />
            <Route path='nopage' element={<Pages.NoPage />} />
        </>
    )
}

export default AuthRoutes;
