import { existsSync, lstatSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { parse as YamlParse } from 'yaml';
import { LoadContext, Plugin } from '@docusaurus/types';

interface IMessageConfig {
    base_path: string;
    includes: string[];
}

const renderMessages = (context: LoadContext, options: Record<string, unknown>): Plugin => {
    const renderMessage = (sourcePath: string, targetPath: string) => {
        const rawText = readFileSync(sourcePath, 'utf-8');
        const metadata = rawText.match(/\s*---([\s\S]*?)---\s/);
        if (!metadata || metadata.length < 2) {
            throw new Error(`No metadata found in ${sourcePath}`);
        }

        const content = rawText.slice(metadata[0].length, rawText.length);
        const { title, subject } = YamlParse(metadata[1]);
        const message = {
            title,
            subject,
            content
        };
        writeFileSync(targetPath, JSON.stringify(message));
    };
    return {
        name: 'render-messages',
        async loadContent() {
            const messagesDir = resolve(context.siteDir, 'message');
            const staticDir = resolve(context.siteDir, 'static');

            if (!existsSync(messagesDir)) {
                console.warn(`[render-messages] Directory not found: ${messagesDir}`);
                return;
            }

            const subdirs = readdirSync(messagesDir).filter((subdir) =>
                lstatSync(join(messagesDir, subdir)).isDirectory()
            );

            subdirs.forEach((subdir) => {
                const configPath = join(messagesDir, subdir, 'config.json');

                if (!existsSync(configPath)) {
                    console.warn(`[render-messages] Config file not found: ${configPath}`);
                    return;
                }

                try {
                    const config: IMessageConfig = JSON.parse(readFileSync(configPath, 'utf-8'));
                    const { base_path, includes } = config;

                    if (!base_path || !Array.isArray(includes)) {
                        console.warn(`[render-messages] Invalid config format: ${configPath}`);
                        return;
                    }

                    const baseDir = join(staticDir, base_path);
                    mkdirSync(baseDir, { recursive: true });

                    includes.forEach((file) => {
                        const sourcePath = join(messagesDir, subdir, `${file}.md`);
                        const targetPath = join(baseDir, `${file}.json`);
                        mkdirSync(dirname(targetPath), { recursive: true });

                        if (existsSync(sourcePath)) {
                            console.debug(
                                `[render-messages] Rendering: ${sourcePath} -> ${targetPath}`
                            );
                            renderMessage(sourcePath, targetPath);
                        } else {
                            console.warn(`[render-messages] File not found: ${sourcePath}`);
                        }
                    });
                } catch (error) {
                    console.error(
                        `[render-messages] Error rendering using config: ${configPath}`,
                        error
                    );
                }
            });
        }
    };
};

export default renderMessages;
