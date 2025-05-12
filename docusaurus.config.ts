import type { Config } from '@docusaurus/types';
import { siteConfig } from './src/config/global';
import { linksConfig } from './src/config/links';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import tailwindCssPlugin from './plugins/tailwindcss-config';
import renderMessages from './plugins/render-messages';

const config: Config = {
    url: siteConfig.url,
    title: siteConfig.title,
    baseUrl: siteConfig.base,
    favicon: siteConfig.favicon,
    tagline: siteConfig.description,
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },
    themeConfig: {
        image: siteConfig.social,
        navbar: {
            title: siteConfig.title,
            items: linksConfig.navigators,
            logo: { src: siteConfig.logo }
        },
        footer: { style: 'light', copyright: siteConfig.copyright },
        prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false
        }
    } satisfies Preset.ThemeConfig,
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/anyshake/homepage/blob/master/'
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true
                    },
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn'
                },
                theme: { customCss: './src/css/custom.css' }
            } satisfies Preset.Options
        ]
    ],
    plugins: [tailwindCssPlugin, renderMessages],
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn'
};

export default config;
