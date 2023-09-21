import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Detail = ({ detail }) => {
    const { name, area, capital, region, population , flags} = detail;
    // console.log(detail);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/products')
    }

    return (
        <div>
            <div className="card my-10 bg-base-100 shadow-xl">
                <figure><img src={flags.png} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">{name.common}</h2>
                    <p className="text-center text-xl font-bold"> Area : {area}</p>
                    <p className="text-center text-xl font-bold"> Population : {population}</p>
                    <p className="text-center text-xl font-bold"> Region : {region}</p>
                    <p className="text-center text-xl font-bold"> Capital : {capital}</p>
                    <div className="card-actions justify-center">
                <button onClick={handleBack} className="bg-green-400 px-4 py-2 rounded-lg text-white text-xl font-semibold">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;