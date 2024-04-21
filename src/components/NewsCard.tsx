import { News } from "../type";

/* export interface News {
    description: string;
    hostname: string;
    icon: string;
    rawDescription: string;
    title: string;
    url: string;
} */

export default function NewsCard({ news }: { news: News }) {
    const hostNameFormatted = `https://${news.hostname}`;

    return (
        <div className="bg-white hover:shadow-lg transition-shadow">
            <a
                href={news.url}
                target="_blank"
            >
                <div className="flex flex-col p-4">
                    <h1
                        dangerouslySetInnerHTML={{ __html: news.title }}
                        className="font-bold text-xl"
                    />
                    <p
                        dangerouslySetInnerHTML={{
                            __html: news.rawDescription,
                        }}
                        className="my-4"
                    ></p>
                    <div className="flex flex-row gap-x-2">
                        <img
                            src={news.icon}
                            className="w-6 h-6"
                        />
                        <a
                            href={hostNameFormatted}
                            target="_blank"
                            className="text-sky-500 hover:text-sky-600"
                        >
                            {news.hostname}
                        </a>
                    </div>
                </div>
            </a>
        </div>
    );
}
