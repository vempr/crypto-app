import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetNewsDataQuery } from "../../api/newsApi.ts";
import { setNews } from "../../app/appSlice.ts";

import Loading from "../../components/Loading.tsx";
import NewsCard from "../../components/NewsCard.tsx";
import ErrorPage from "../../components/ErrorPage.tsx";

import { AppDispatch, RootState } from "../../app/store.ts";
import { News, Page } from "../../type.ts";

export default function LatestNews({ page }: Page) {
    const dispatch = useDispatch<AppDispatch>();
    const newsData = useSelector((state: RootState) => state.app.news);
    const { data, isLoading, error, refetch } = useGetNewsDataQuery(undefined);

    useEffect(() => {
        if (data) {
            console.log(data);
            dispatch(setNews(data));
        }
    }, [data]);

    useEffect(() => {
        if (!isLoading && !error && newsData === null) {
            refetch();
        }
    }, [newsData]);

    if (error) {
        console.log(error);
        return <ErrorPage err={error} />;
    }

    if (isLoading || !newsData) {
        return <Loading padding="big" />;
    }

    const numCards = page === "home" ? 20 : 50;
    const finalNews = newsData.data.slice(0, numCards);

    return (
        <div className="mb-10 md:ml-3 flex flex-col gap-y-5 animate-fade">
            {finalNews.map((news: News) => (
                <div key={news.url}>
                    <NewsCard news={news} />
                </div>
            ))}
        </div>
    );
}
