import Icon from '@mdi/react';
import { mdiChevronDoubleDown, mdiChevronDoubleRight } from '@mdi/js';
import hero from '../../assets/hero.webp';
import Link from '@docusaurus/Link';
import { links } from '../../config/links';
import { motion } from 'framer-motion';

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
                            to={links.purchase}
                            target="_blank"
                            className="flex items-center rounded-lg bg-purple-500 px-4 py-1.5 font-bold !text-white !no-underline !transition-all hover:bg-purple-600"
                        >
                            <span>Get one</span>
                            <Icon path={mdiChevronDoubleRight} size={1} />
                        </Link>
                        <Link
                            to={links.getStarted}
                            className="link flex items-center rounded-lg border border-purple-500 px-4 py-1.5 font-bold text-purple-500 !no-underline !transition-all hover:bg-purple-500 hover:!text-white"
                        >
                            <span>Read the docs</span>
                            <Icon path={mdiChevronDoubleRight} size={1} />
                        </Link>
                    </div>

                    <Link
                        to={links.liveDemo}
                        className="mt-4 text-sm !text-purple-500 hover:!underline"
                    >
                        Checkout Live Demo
                    </Link>
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
                className="mb-8 hidden items-center justify-center md:-mt-10 md:!flex"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Icon className="text-gray-500" path={mdiChevronDoubleDown} size={1.5} />
            </motion.div>
        </div>
    );
};

export default Hero;
