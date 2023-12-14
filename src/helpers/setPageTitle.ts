import { siteConfig } from "../config/site";

export const setPageTitle = (paging?: string): void => {
    const { title, slogan } = siteConfig;
    document.title = paging ? `${paging} - ${title}` : `${title} - ${slogan}`;
};
