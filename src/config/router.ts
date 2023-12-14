import { lazy } from "react";
import Error from "../views/Error";

const Home = lazy(() => import("../views/Home"));
const Features = lazy(() => import("../views/Features"));
const Documentation = lazy(() => import("../views/Documentation"));
const Contribution = lazy(() => import("../views/Contribution"));
const Donation = lazy(() => import("../views/Donation"));

export interface IRouter {
    index: boolean;
    tag: string;
    component: any;
    uri: string;
}

export interface IRouterConfig {
    router: IRouter[];
    mode: "hash" | "history";
}

export const routerConfig: IRouterConfig = {
    mode: "hash",
    router: [
        {
            index: true,
            tag: "home",
            component: Home,
            uri: "/",
        },
        {
            index: false,
            tag: "features",
            component: Features,
            uri: "/features",
        },
        {
            index: false,
            tag: "documentation",
            component: Documentation,
            uri: "/documentation/:query",
        },
        {
            index: false,
            tag: "contribution",
            component: Contribution,
            uri: "/contribution/:query",
        },
        {
            index: false,
            tag: "donation",
            component: Donation,
            uri: "/donation",
        },
        {
            index: false,
            tag: "error",
            component: Error,
            uri: "*",
        }, // 404 Error Page
    ],
};
