import { motion } from 'framer-motion';

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

export default Vision;
