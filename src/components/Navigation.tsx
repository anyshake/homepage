import { useState } from "react";
import { Link } from "react-router-dom";

const shouldHighlightLabel = (uri: string): boolean => {
    const { pathname, hash } = window.location;
    if (hash && hash.length > 0) {
        return hash.slice(1) === uri;
    }
    return (
        pathname.slice(pathname.length - 1) === uri.slice(uri.length - 1) &&
        pathname.includes(uri)
    );
};

interface NavigationProps {
    title: string;
    icon: string;
    base: string;
    menu: {
        external?: boolean;
        name: string;
        uri: string;
    }[];
}

export const Navigation = (props: NavigationProps) => {
    const { title, icon, menu, base } = props;
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

    return (
        <nav className="bg-gray-100 shadow-xl">
            <div className="flex flex-wrap items-center justify-between mx-auto p-3">
                <Link to={base} className="flex items-center flex-shrink-0">
                    <img className="w-16 h-16 mx-4" src={icon} alt="" />
                    <span className="font-semibold text-xl tracking-tight text-gray-800">
                        {title}
                    </span>
                </Link>

                <button
                    onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-sm md:hidden hover:bg-gray-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="14"
                        viewBox="0 0 448 512"
                    >
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>

                <div
                    className={`${
                        isMenuCollapsed && "hidden"
                    } w-full md:block md:w-auto`}
                >
                    <ul className="font-medium flex flex-col px-8 py-4 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-gray-100">
                        {menu.map(({ name, uri, external }, index) => (
                            <li key={`/components/Navigation/0/${index}`}>
                                <Link
                                    to={uri}
                                    className={`${
                                        shouldHighlightLabel(uri)
                                            ? `text-indigo-600`
                                            : `text-gray-600`
                                    } py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-500 md:p-0 flex flex-row`}
                                    target={external ? "_blank" : "_self"}
                                >
                                    {name}
                                    {external && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="10"
                                            width="10"
                                            fill="currentColor"
                                            viewBox="0 0 512 512"
                                            className="m-1"
                                        >
                                            <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                        </svg>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
