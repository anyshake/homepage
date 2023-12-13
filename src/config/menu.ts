import icon from "../assets/images/logo.webp";

export const menuConfig = {
    title: "AnyShake",
    base: "/",
    icon,
    menu: [
        {
            external: false,
            name: "Home",
            uri: "/",
        },
        {
            external: false,
            name: "Documentation",
            uri: "/documentation",
        },
        {
            external: false,
            name: "Features",
            uri: "/features",
        },
        {
            external: false,
            name: "Contribution",
            uri: "/contribution",
        },
        {
            external: true,
            name: "GitHub",
            uri: "https://github.com/anyshake",
        },
    ],
};
