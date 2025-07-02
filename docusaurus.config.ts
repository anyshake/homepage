import type { Config } from '@docusaurus/types';
import { siteConfig } from './src/config/global';
import { linksConfig } from './src/config/links';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import tailwindCssPlugin from './plugins/tailwindcss-config';
import renderMessages from './plugins/render-messages';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
    markdown: {
        mermaid: true
    },
    themeConfig: {
        image: siteConfig.social,
        navbar: {
            title: siteConfig.title,
            items: linksConfig.navigators,
            logo: { src: siteConfig.logo }
        },
        imageZoom: { selector: '.markdown img' },
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
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
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
    themes: ['@docusaurus/theme-mermaid'],
    plugins: [tailwindCssPlugin, renderMessages, 'plugin-image-zoom'],
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn'
};

export default config;
