import Header from "../../components/Header.tsx";
import GlobalCryptoStats from "./GlobalCryptoStats.tsx";
import ShowMore from "../../components/ShowMore.tsx";
import TopCurrencies from "../shared-components/TopCurrencies.tsx";
import LatestNews from "../shared-components/LatestNews.tsx";
import PageWrapper from "../../components/PageWrapper.tsx";

export default function Home() {
    return (
        <PageWrapper>
            <div className="flex flex-col">
                <div className="md:w-100vw-navbar">
                    <Header title="Global Crypto Statistics" />
                    <GlobalCryptoStats />
                </div>
                <div className="flex flex-col md:w-100vw-navbar">
                    <div className="flex flex-row justify-between">
                        <Header title="Top 10 Cryptocurrencies In The World" />
                        <ShowMore link="/cryptocurrencies" />
                    </div>
                    <TopCurrencies page="home" />
                    <div className="flex flex-row justify-between">
                        <Header title="Latest Crypto News" />
                        <ShowMore link="/news" />
                    </div>
                    <LatestNews page="home" />
                </div>
            </div>
        </PageWrapper>
    );
}
