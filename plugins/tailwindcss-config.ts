import { LoadContext } from '@docusaurus/types';

const tailwindCssPlugin = (context: LoadContext, options: Record<string, unknown>) => {
    return {
        name: 'tailwind-plugin',
        configurePostCss(postcssOptions) {
            postcssOptions.plugins = [require('@tailwindcss/postcss')];
            return postcssOptions;
        }
    };
};

export default tailwindCssPlugin;
