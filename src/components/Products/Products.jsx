import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const products = useLoaderData();
    return (
        <div className="my-5">
            <div className="grid grid-cols-3 container mx-auto gap-6">
                {
                    products?.map((product,i) => <Product key={i} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;