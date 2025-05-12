import Layout from '@theme/Layout';
import { siteConfig } from '../config/global';
import Icon from '@mdi/react';
import { mdiChevronDoubleDown, mdiChevronDoubleRight } from '@mdi/js';
import hero from '../assets/hero.webp';
import Link from '@docusaurus/Link';
import { links } from '../config/links';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

import featureImg1 from '../assets/features/1.webp';
import featureImg2 from '../assets/features/2.webp';
import featureImg3 from '../assets/features/3.webp';
import featureImg4 from '../assets/features/4.webp';
import featureImg5 from '../assets/features/5.webp';

const Hero = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex min-h-screen flex-col items-center justify-center gap-12 pt-2 md:-mt-16 md:flex-row md:gap-16"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex w-full flex-col items-center justify-center px-4 md:w-3/5 md:items-start"
                >
                    <h1 className="text-center text-4xl font-bold text-gray-800 md:text-left md:text-6xl">
                        Let's Listen to the Whispering Earth.
                    </h1>

                    <p className="mt-4 text-center text-gray-600 md:text-left">
                        The truly open-source and powerful seismic monitoring solution empowering
                        enthusiasts to detect and analyze earthquakes with precision.
                    </p>

                    <div className="mt-4 flex flex-wrap justify-center gap-4 md:justify-start">
                        <Link
                            to={links.crowdFunding}
                            target="_blank"
                            className="flex items-center rounded-lg bg-purple-500 px-4 py-1.5 font-bold !text-white !no-underline !transition-all hover:bg-purple-600"
                        >
                            <span>Join the crowdfunding</span>
                            <Icon path={mdiChevronDoubleRight} size={1} />
                        </Link>
                        <Link
                            to={links.getStarted}
                            className="link flex items-center rounded-lg border border-purple-500 px-4 py-1.5 font-bold !text-purple-500 !no-underline !transition-all hover:bg-purple-500 hover:!text-white"
                        >
                            <span>Read the docs</span>
                            <Icon path={mdiChevronDoubleRight} size={1} />
                        </Link>
                    </div>

                    {/* <Link
                        to={links.liveDemo}
                        className="mt-4 text-sm !text-purple-500 hover:!underline"
                    >
                        Checkout Live Demo
                    </Link> */}
                    <Link
                        to={links.discord}
                        target="_blank"
                        className="mt-2 text-sm !text-purple-500 hover:!underline"
                    >
                        Join our Discord server
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex w-full justify-center md:w-2/5"
                >
                    <img
                        src={hero}
                        alt="AnyShake Explorer"
                        className="w-[200px] transition-all duration-1000 hover:scale-105 md:w-[300px]"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="md:-mt-10 mb-8 hidden items-center justify-center md:!flex"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Icon className="text-gray-500" path={mdiChevronDoubleDown} size={1.5} />
            </motion.div>
        </div>
    );
};

const Features = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="mb-32 flex flex-col items-center space-y-8"
            >
                <h2 className="my-8 max-w-lg text-center text-6xl font-bold text-gray-800">
                    Low-frequency Mastery, Open-source First.
                </h2>
                <p className="max-w-2xl text-center text-gray-600">
                    The only open-source seismometer with true low-frequency compensation. AnyShake
                    stands alone among open-source seismic detectors, capturing vibrations down to
                    0.1 Hz, perfect for resolving the slow, deep rumbles that most DIY solutions
                    miss.
                </p>
                <img
                    src={featureImg1}
                    className="mt-8 w-full rounded-md transition-all duration-300 hover:scale-105 md:w-1/2"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="mb-32 flex flex-col items-center space-y-8"
            >
                <h2 className="my-8 max-w-lg text-center text-6xl font-bold text-gray-800">
                    6-Channel Sampling, More Possibilities.
                </h2>
                <p className="max-w-2xl text-center text-gray-600">
                    Capture every detail with 6 independent sampling channels, each ready to handle
                    precise measurements across multiple sensors. From structural monitoring to deep
                    geological exploration, expand your capabilities with seamless, synchronized
                    data collection.
                </p>
                <img
                    src={featureImg2}
                    className="mt-8 w-lg rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="mb-32 flex flex-col items-center space-y-8"
            >
                <h2 className="my-8 max-w-lg text-center text-6xl font-bold text-gray-800">
                    Stream & Check. Anywhere, Anytime.
                </h2>
                <p className="max-w-2xl text-center text-gray-600">
                    Access real-time seismic data from anywhere over web. With flexible data
                    streaming and remote monitoring, stay connected to the pulse of the Earth,
                    whether you’re in the lab or on the go.
                </p>
                <img
                    src={featureImg3}
                    className="mt-8 w-full transition-all duration-300 hover:scale-105 md:w-1/2"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="mb-32 flex flex-col items-center space-y-8"
            >
                <h2 className="my-8 max-w-lg text-center text-6xl font-bold text-gray-800">
                    Seamless Integration with Other Platforms
                </h2>
                <p className="max-w-2xl text-center text-gray-600">
                    Plug into a world of possibilities. AnyShake is designed to integrate smoothly
                    with popular geophysical tools, scientific workflows, and IoT platforms, making
                    it the perfect addition to any research or hobbyist setup.
                </p>
                <img
                    src={featureImg4}
                    className="mt-8 w-full transition-all duration-300 hover:scale-105 md:w-1/2"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="mb-32 flex flex-col items-center space-y-8"
            >
                <h2 className="my-8 max-w-lg text-center text-6xl font-bold text-gray-800">
                    We’re Making Things Easier
                </h2>
                <p className="max-w-2xl text-center text-gray-600">
                    From installation to data processing, AnyShake removes the barriers to seismic
                    exploration. With intuitive software, open-source code, and rich documentation,
                    you can focus on discovery, not debugging.
                </p>
                <img
                    src={featureImg5}
                    className="mt-8 w-full transition-all duration-300 hover:scale-105 md:w-1/2"
                />
            </motion.div>
        </div>
    );
};

const Vision = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true }}
                className="flex w-full flex-col items-center justify-center px-4 md:w-3/5 md:items-start"
            >
                <h1 className="text-center text-4xl font-bold text-gray-800 md:text-left md:text-6xl">
                    Our Vision
                </h1>
                <p className="mt-4 text-center text-gray-600 md:text-left">
                    To make advanced seismic monitoring accessible to everyone, empowering
                    individuals and communities to better understand and respond to the dynamic
                    forces of our planet.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true }}
                className="flex w-full flex-col items-center justify-center px-4 md:w-3/5 md:items-start"
            >
                <h1 className="text-center text-4xl font-bold text-gray-800 md:text-left md:text-6xl">
                    Our Mission
                </h1>
                <p className="mt-4 text-center text-gray-600 md:text-left">
                    To provide cutting-edge, open-source seismic solutions that combine
                    professional-grade hardware with powerful, user-friendly software. We strive to
                    foster a global community of seismic enthusiasts, researchers, and students by
                    delivering innovative tools that enhance the study and monitoring of
                    earthquakes.
                </p>
            </motion.div>
        </div>
    );
};

const Home = () => {
    const { heading, description } = siteConfig;
    return (
        <Layout title={heading} description={description}>
            <div className="container space-y-8 overflow-hidden px-4 xl:px-8">
                <Hero />
                <Features />
                <Vision />
            </div>
        </Layout>
    );
};

export default Home;
