import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";

const MainLayout = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    return (
        <div>
            <div className="flex shadow-lg text-xl py-4 px-8 justify-between items-center">
                <h1 className="font-bold">Amahjon</h1>
                <nav>
                    <ul className=" flex gap-5 justify-end">
                        <li><NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gray-400" : ""
                        }>Home</NavLink></li>
                        <li><NavLink to="/products" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gray-400" : ""
                        }>Products</NavLink></li>
                        <li><NavLink to="/dashboard" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gray-400" : ""
                        }>Dashboard</NavLink></li>
                    </ul>
                </nav>
            </div>
            {
                navigation.state === 'loading' ?
                    <Spinner></Spinner> :
                    <div className="min-h-screen">
                        <Outlet></Outlet>
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;