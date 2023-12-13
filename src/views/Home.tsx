import { useEffect } from "react";
import { Footer } from "../components/Footer";
import Navigation from "../components/Navigation";
import { Header } from "../components/Header";
import { menuConfig } from "../config/menu";
import { siteConfig } from "../config/site";
import { setTitle } from "../helpers/setTitle";

const Home = () => {
    const { slogan, copyright } = siteConfig;
    useEffect(() => setTitle("Home"), []);

    return (
        <div>
            <Navigation {...menuConfig} />
            <Header />
            <Footer text={slogan} copyright={copyright} />
        </div>
    );
};

export default Home;
