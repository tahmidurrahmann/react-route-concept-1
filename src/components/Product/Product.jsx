import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
    const { name, flags, capital } = product;
    // console.log(product);

    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/product/${name.common}`)
    }
 

    return (
        <div className="flex">
            <div className="card bg-base-100 shadow-xl rounded-lg">
                    <figure className="p-12 flex-1"><img className="rounded-lg"  src={flags?.svg} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold">{name?.common}</h2>
                        <p  className="text-xl font-semibold">{capital}</p>
                        <div className="card-actions justify-center">
                          <button onClick={handleDetails} className="bg-green-400 px-4 py-2 rounded-lg text-white text-xl font-semibold">See Details</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Product;