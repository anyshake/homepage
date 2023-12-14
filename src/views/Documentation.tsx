import { useEffect } from "react";
import { menuConfig } from "../config/menu";
import { siteConfig } from "../config/site";
import { setPageTitle } from "../helpers/setPageTitle";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useMatch } from "react-router-dom";
import { getRouteByTag } from "../helpers/getRouteByTag";
import { routerConfig } from "../config/router";
import { ScrollToTop } from "../components/ScrollToTop";

const Documentation = () => {
    const { router } = routerConfig;
    const { slogan, copyright } = siteConfig;
    const { title, base, icon, menu } = menuConfig;
    useEffect(() => setPageTitle("Documentation"), []);

    const currentRoute = getRouteByTag(router, "documentation").uri;
    const { query } = useMatch(currentRoute)?.params || {};
    console.log(query);

    return (
        <>
            <Navigation title={title} base={base} icon={icon} menu={menu} />
            <div className="flex min-h-screen justify-center">
                <h1 className="m-auto">Documentation</h1>
            </div>
            <Footer text={slogan} copyright={copyright} />
            <ScrollToTop />
        </>
    );
};

export default Documentation;
