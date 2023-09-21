import { LineWave } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center">
            <LineWave
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </div>
    );
};

export default Spinner;