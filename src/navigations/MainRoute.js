import * as Pages from '../pages'
import {Route} from "react-router-dom";

function MainRoute() {
    return (
        <>
            <Route index element={<Pages.Home />} />
        </>
    )
}

export default MainRoute;
