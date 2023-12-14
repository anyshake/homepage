import { Link } from "react-router-dom";

interface HeroSectionProps {
    secondary: string;
    preview: string;
    primary: string;
    actions: {
        uri: string;
        label: string;
        button: boolean;
    }[];
}

export const HeroSection = (props: HeroSectionProps) => {
    const { primary, secondary, preview, actions } = props;
    return (
        <div className="justify-center w-full min-h-screen flex px-8 py-10 text-center md:px-12 lg:text-left">
            <div className="w-100 m-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                <div className="grid items-center lg:grid-cols-2">
                    <div className="mb-12 lg:mt-0 lg:mb-0 animate-fade-left animate-duration-[2000ms]">
                        <div className="block rounded-lg px-8 md:px-10 lg:px-12 py-14 bg-slate-200 text-gray-800 shadow-2xl">
                            <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                                {primary}
                            </h1>
                            <h2 className="mt-2 mb-16 text-lg md:text-2xl xl:text-3xl">
                                {secondary}
                            </h2>
                            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                                {actions.map(({ uri, label, button }, index) =>
                                    button ? (
                                        <Link
                                            to={uri}
                                            key={`/components/HeroSection/0/${index}`}
                                            className="m-2 border p-4 rounded-lg shadow-2xl font-semibold bg-indigo-500 text-white duration-200 hover:bg-indigo-600 hover:scale-110"
                                        >
                                            {label}
                                        </Link>
                                    ) : (
                                        <Link
                                            to={uri}
                                            key={`/components/HeroSection/0/${index}`}
                                            className="m-2 hover:underline font-semibold"
                                        >
                                            {label}
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="animate-wiggle animate-infinite animate-duration-[5000ms] animate-ease-in-out">
                        <img
                            alt=""
                            src={preview}
                            className="w-full rounded-lg shadow-2xl hover:scale-110 duration-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
