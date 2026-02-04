import { motion } from 'framer-motion';
import featureImg1 from '../../assets/features/1.webp';
import featureImg2 from '../../assets/features/2.webp';
import featureImg3 from '../../assets/features/3.webp';
import featureImg4 from '../../assets/features/4.webp';
import featureImg5 from '../../assets/features/5.webp';

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

export default Features;
