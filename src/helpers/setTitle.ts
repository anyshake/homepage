import { siteConfig } from "../config/site";

export const setTitle = (paging: string): void => {
    const { title } = siteConfig;
    document.title = `${paging} - ${title}`;
};
