import { Suspense } from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createHashRouter,
} from "react-router-dom";
import { routerConfig } from "./config/router";
import Loading from "./views/Loading";

const App = () => {
    const { mode, router } = routerConfig;
    const routers = router.map((item) => {
        const { uri, index, component } = item;
        return { path: uri, index, Component: component };
    });

    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider
                router={
                    mode === "hash"
                        ? createHashRouter(routers)
                        : createBrowserRouter(routers)
                }
            />
        </Suspense>
    );
};

export default App;
