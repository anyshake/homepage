import { motion } from 'framer-motion';

import partnerNTU from '../../assets/partners/earth-observatory-singapore-ntu.webp';
import partnerExptechTW from '../../assets/partners/exptech-tw.webp';
import partnerWolfx from '../../assets/partners/wolfx-public-api.webp';

const PARTNERS = [
    {
        id: 'eos-sg',
        name: 'Earth Observatory of Singapore',
        subtitle: 'An institute of Nanyang Technological University',
        logo: partnerNTU,
        description:
            'In collaboration with EOS, AnyShake devices are deployed across regions including Myanmar and Indonesia, supporting low-cost seismic monitoring networks and enabling regional earthquake observation and applied research.'
    },
    {
        id: 'exptech-tw',
        name: 'ExpTech Taiwan',
        subtitle: 'Taiwan open-source disaster monitoring & EEW ecosystem',
        logo: partnerExptechTW,
        description:
            'AnyShake collaborates with ExpTech as an ecosystem partner, sharing core technologies and co-developing open-source libraries to improve interoperability between seismic instruments and disaster monitoring platforms.'
    },
    {
        id: 'wolfx-jp',
        name: 'Wolfx Public API',
        subtitle: 'Disaster Prevention APIs & Public Applications',
        logo: partnerWolfx,
        description:
            'Through collaboration with Wolfx, selected AnyShake stations are hosted on the Wolfx platform, where analyzed seismic data is integrated into the Wolfx Public API and distributed to downstream disaster prevention applications.'
    }
];

const Partners = () => {
    return (
        <div className="w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col items-center space-y-6 text-center"
                >
                    <h2 className="text-4xl font-bold text-gray-800 md:text-6xl">Our Partners</h2>

                    <p className="max-w-2xl text-gray-600">
                        AnyShake Project is proud to collaborate with leading research institutions
                        and organizations to push the boundaries of open-source seismic monitoring.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"
                >
                    {PARTNERS.map(({ id, logo, name, subtitle, description }, index) => {
                        const isLastOdd = PARTNERS.length % 2 === 1 && index === PARTNERS.length - 1;
                        return (
                            <div
                                key={id}
                                className={[
                                    'group flex flex-col items-center gap-6 rounded-2xl px-8 py-10 shadow-md transition-all duration-300 hover:shadow-lg md:items-start',
                                    isLastOdd ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
                                ].join(' ')}
                            >
                                <div className="flex h-18 w-full items-center justify-center md:justify-start">
                                    <img
                                        src={logo}
                                        alt={name}
                                        className="size-auto max-h-full rounded-lg object-contain"
                                    />
                                </div>

                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                                    <p className="mb-3 text-sm font-medium text-gray-500">{subtitle}</p>
                                    <p className="leading-relaxed text-gray-600">{description}</p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Partners;
