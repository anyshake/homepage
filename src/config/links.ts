import { NavbarItem } from "@docusaurus/theme-common";
import { IAction } from "../components/Header/index";

interface ILinkConfig {
    actions: IAction[];
    navigators: NavbarItem[];
}

export const linksConfig: ILinkConfig = {
    actions: [
        {
            label: "Get Started",
            to: "/docs/introduction",
        },
    ],
    navigators: [
        {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
        },
        {
            to: "/contribution",
            label: "Contribution",
            position: "left",
        },
        {
            to: "/donation",
            label: "Donation",
            position: "left",
        },
        {
            label: "GitHub",
            position: "right",
            href: "https://github.com/anyshake",
        },
    ],
};
