import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex">
            <nav className="w-[20%] shadow-md py-4 text-xl font-bold flex gap-6 flex-col justify-center items-center">
                <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-slate-200" : ""
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/dashboard/chocolates"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-slate-200" : ""
                    }
                >
                    Chocolates
                </NavLink>
                <NavLink
                    to="/dashboard/elements"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-slate-200" : ""
                    }
                >
                    Elements
                </NavLink>
            </nav>
            <div className="w-[80%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;