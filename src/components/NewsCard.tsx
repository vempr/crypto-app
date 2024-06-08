import { News } from "../type";

/* export interface News {
    title: string;
    url: string;
    excerpt: string;
    thumbnail: string;
    publisher: {
        name: string;
        favicon: string;
    }
} */

export default function NewsCard({ news }: { news: News }) {
    const icon = news.publisher.favicon || news.thumbnail;
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
                            __html: news.excerpt,
                        }}
                        className="my-4"
                    ></p>
                    <div className="flex flex-row gap-x-2">
                        <img
                            src={icon}
                            className="w-6 h-6"
                        />
                        <a
                            href={news.publisher.name}
                            target="_blank"
                            className="text-sky-500 hover:text-sky-600"
                        >
                            {news.publisher.name}
                        </a>
                    </div>
                </div>
            </a>
        </div>
    );
}
