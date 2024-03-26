import { Outlet } from "react-router-dom";

export default function Base() {



    return (
        <div className="flex items-center justify-center">
            <div className="border rounded-lg shadow-md p-8 bg-white w-1/2">
                <Outlet />
            </div>
        </div>
    )
}