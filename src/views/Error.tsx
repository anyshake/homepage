import { useEffect } from "react";
import { setPageTitle } from "../helpers/setPageTitle";

const Error = () => {
    useEffect(() => setPageTitle("Error"), []);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <div className="animate-bounce">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="py-2 w-20 h-20"
                    fill="#ea580c"
                >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
            </div>

            <h2 className="py-2 text-2xl font-bold text-gray-600">
                404 Not Found
            </h2>
        </div>
    );
};

export default Error;
