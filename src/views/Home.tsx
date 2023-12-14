import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { menuConfig } from "../config/menu";
import { siteConfig } from "../config/site";
import { setPageTitle } from "../helpers/setPageTitle";
import { routerConfig } from "../config/router";
import { getBaseUri } from "../helpers/getBaseUri";
import { Navigation } from "../components/Navigation";
import heroImage from "../assets/images/hero.webp";

const Home = () => {
    const { router } = routerConfig;
    const { title, base, icon, menu } = menuConfig;
    const { slogan, description, copyright } = siteConfig;
    useEffect(() => setPageTitle(), []);

    return (
        <>
            <Navigation title={title} base={base} icon={icon} menu={menu} />
            <HeroSection
                actions={[
                    {
                        button: true,
                        label: "Get Started",
                        uri: `${getBaseUri(
                            router.find((r) => r.tag === "documentation")
                                ?.uri || "/documentation"
                        )}/wizard`,
                    },
                    {
                        button: false,
                        label: "Learn more",
                        uri: `${getBaseUri(
                            router.find((r) => r.tag === "features")?.uri ||
                                "/features"
                        )}`,
                    },
                ]}
                primary={slogan}
                preview={heroImage}
                secondary={description}
            />
            <Footer text={slogan} copyright={copyright} />
        </>
    );
};

export default Home;
