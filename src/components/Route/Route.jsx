import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Products from "../Products/Products";
import DashBoard from "../DashBoard/DashBoard";
import ProductDetail from "../ProductDetail/ProductDetail";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Chocolates from "../Chocolates/Chocolates";
import Elements from "../Elements/Elements";

const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/products',
                element : <Products></Products>,
                loader : () => fetch(`https://restcountries.com/v3.1/all`)
            },
            {
                path : '/product/:productName',
                loader : ({params})=> fetch(`https://restcountries.com/v3.1/name/${params.productName}`),
                element : <ProductDetail></ProductDetail>
            },
            {
                path : '/dashboard',
                element : <DashboardLayout></DashboardLayout>,
                children : [
                    {
                        path : '/dashboard',
                        element : <DashBoard></DashBoard>
                    },
                    {
                        path : '/dashboard/chocolates',
                        element : <Chocolates></Chocolates>
                    },
                    {
                        path : '/dashboard/elements',
                        element : <Elements></Elements>
                    }
                ]
            }
        ]
    }
])

export default router;