import { useEffect } from "react";
import { menuConfig } from "../config/menu";
import { setPageTitle } from "../helpers/setPageTitle";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { siteConfig } from "../config/site";
import { ScrollToTop } from "../components/ScrollToTop";

const Features = () => {
    const { slogan, copyright } = siteConfig;
    const { title, base, icon, menu } = menuConfig;
    useEffect(() => setPageTitle("Features"), []);

    return (
        <>
            <Navigation title={title} base={base} icon={icon} menu={menu} />
            <div className="flex min-h-screen justify-center">
                <h1 className="m-auto">Features</h1>
            </div>
            <Footer text={slogan} copyright={copyright} />
            <ScrollToTop />
        </>
    );
};

export default Features;
