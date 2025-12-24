import { NavbarItem } from '@docusaurus/theme-common';

interface ILinkConfig {
    actions: { label: string; to: string }[];
    navigators: NavbarItem[];
}

export const links = {
    repository: 'https://github.com/anyshake',
    getStarted: '/docs/project-overview',
    liveDemo: '/docs/live-demo',
    configurationTool: 'https://anyshake.github.io/prisma/',
    purchase: 'https://www.crowdsupply.com/senseplex/anyshake-explorer',
    discord: 'https://discord.gg/PuK4Sb4Nr6'
};

export const linksConfig: ILinkConfig = {
    actions: [
        {
            label: 'Get Started',
            to: links.getStarted
        }
    ],
    navigators: [
        {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs'
        },
        {
            to: '/blog',
            label: 'Blog',
            position: 'left'
        },
        // {
        //     label: 'Live Demo',
        //     position: 'right',
        //     href: links.liveDemo
        // },
        {
            label: 'Configuration Tool',
            position: 'right',
            href: links.configurationTool
        },
        {
            label: 'CrowdFunding',
            position: 'right',
            href: links.purchase
        },
        {
            label: 'Discord',
            position: 'right',
            href: links.discord
        },
        {
            label: 'GitHub',
            position: 'right',
            href: links.repository
        }
    ]
};
