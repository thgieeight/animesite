import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "../page/home/landingpage";
const Routing=()=>{
    return(<>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}>
            
            </Route>
        </Routes>
        </BrowserRouter>

    </>)
}

export default Routing;