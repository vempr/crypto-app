interface LinkProps {
    link: {
        name: string;
        url: string;
        type: string;
    };
}

export default function LinkLine({ link }: LinkProps) {
    const type = link.type[0].toUpperCase() + link.type.slice(1);

    return (
        <div className="w-full flex justify-between border-b-2 my-2 text-sm">
            <p className="font-semibold">{type}</p>
            <a
                href={link.url}
                target="_blank"
                className="text-sky-600 font-light"
            >
                {link.name}
            </a>
        </div>
    );
}
