import Layout from '@theme/Layout';
import { siteConfig } from '../config/global';
import Hero from './components/hero';
import Features from './components/features';
import Vision from './components/vision';
import Partners from './components/partners';

const Home = () => {
    const { heading, description } = siteConfig;
    return (
        <Layout title={heading} description={description}>
            <div className="container space-y-8 overflow-hidden px-4 xl:px-8">
                <Hero />
                <Features />
                <Partners />
                <Vision />
            </div>
        </Layout>
    );
};

export default Home;
