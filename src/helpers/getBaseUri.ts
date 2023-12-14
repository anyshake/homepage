export const getBaseUri = (uri: string): string => {
    const filteredPaths = uri.split("/").filter((path) => {
        return path.length > 0 && path[0] !== ":" && path[0] !== "*";
    });
    return `/${filteredPaths.join("/")}`;
};
