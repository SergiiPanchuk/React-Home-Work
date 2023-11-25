import {Outlet} from "react-router-dom";
import {Header} from "../components/HeaderContainer/Header";

const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};