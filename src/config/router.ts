import { lazy } from "react";
import Error from "../views/Error";

const Home = lazy(() => import("../views/Home"));

export const routerConfig = {
    mode: "hash",
    router: [
        {
            index: true,
            component: Home,
            uri: "/",
        },
        {
            index: true,
            component: Home,
            uri: "/documentation",
        },
        {
            index: true,
            component: Home,
            uri: "/features",
        },
        {
            index: true,
            component: Home,
            uri: "/contribution",
        },
        {
            index: false,
            component: Error,
            uri: "*",
        }, // 404 Error Page
    ],
};
