import {Outlet } from "react-router-dom";
import login from "../assets/login.png";


const AuthLayout = () => {
    return (
        <div className="flex flex-col w-full h-screen ">
            <div className="flex  sm:items-center sm:justify-center sm:p-0">
                <div className="md:w-full w-1/2 h-screen">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default AuthLayout;