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
            name: "Features",
            uri: "/features",
        },
        {
            external: false,
            name: "Documentation",
            uri: "/documentation/wizard",
        },
        {
            external: false,
            name: "Contribution",
            uri: "/contribution/wizard",
        },
        {
            external: false,
            name: "Donation",
            uri: "/donation",
        },
        {
            external: true,
            name: "GitHub",
            uri: "https://github.com/anyshake",
        },
    ],
};
