interface FooterProps {
    text: string;
    copyright: string;
}

export const Footer = (props: FooterProps) => {
    const { text, copyright } = props;
    return (
        <footer className="w-full bg-gray-200 text-gray-500 flex flex-col px-6 py-2 sm:flex-row justify-between">
            <span className="text-xs text-center ml-8 md:ml-12">{text}</span>
            <span className="text-sm text-center justify-center">
                {copyright}
            </span>
        </footer>
    );
};
