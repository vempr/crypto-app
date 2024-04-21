import LinkLine from "./LinkLine.tsx";

interface LinksProps {
    name: string;
    links: {
        name: string;
        url: string;
        type: string;
    }[];
}

export default function InfoLinks({ name, links }: LinksProps) {
    return (
        <div>
            <h1 className="font-bold text-4xl text-sky-500 my-3">
                {name} Links
            </h1>
            {links.map((link) => (
                <LinkLine
                    key={link.url}
                    link={link}
                />
            ))}
        </div>
    );
}
