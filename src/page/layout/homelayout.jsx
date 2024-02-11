import { Outlet } from "react-router-dom";
import HomeComponent from "../../component/home/index";

const HomeLayout=()=>{
    return(<>
        <HomeComponent.HeaderCoponent />
        <Outlet />
        <HomeComponent.FooterComponent />
    </>)
}
export default HomeLayout;