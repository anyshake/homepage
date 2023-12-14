import { IRouter } from "../config/router";

export const getRouteByTag = (router: IRouter[], tag: string): IRouter => {
    const route = router.find((route) => route.tag === tag);
    if (route) {
        return route;
    }
    return router.find((route) => route.tag === "error") as IRouter;
};
