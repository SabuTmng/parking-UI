import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function BaseLayout() {
    return (
        <div className="flex">
            <div className="w-5/6 bg-[#f7f9fc]">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}