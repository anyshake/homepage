import { useEffect } from "react";
import { menuConfig } from "../config/menu";
import { siteConfig } from "../config/site";
import { setPageTitle } from "../helpers/setPageTitle";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

const Donation = () => {
    const { slogan, copyright } = siteConfig;
    const { title, base, icon, menu } = menuConfig;
    useEffect(() => setPageTitle("Donation"), []);

    return (
        <>
            <Navigation title={title} base={base} icon={icon} menu={menu} />
            <div className="flex min-h-screen justify-center">
                <h1 className="m-auto">Donation</h1>
            </div>
            <Footer text={slogan} copyright={copyright} />
            <ScrollToTop />
        </>
    );
};

export default Donation;
