import { useLoaderData } from "react-router-dom";
import Detail from "../Detail/Detail";

const ProductDetail = () => {
    const details = useLoaderData();
    return (
        <div>
            <h1 className="grid grid-cols-2 gap-6 container mx-auto">
                {
                    details.map((detail,i) => <Detail key={i} detail={detail}></Detail>)
                }
            </h1>
        </div>
    );
};

export default ProductDetail;