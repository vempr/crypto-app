import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";
import TopCurrencies from "../shared-components/TopCurrencies";

export default function PageCurrencies() {
    return (
        <PageWrapper>
            <div className="flex flex-col md:w-100vw-navbar">
                <Header title="Top 100 Cryptocurrencies In The World" />
                <TopCurrencies page="cryptocurrencies" />
            </div>
        </PageWrapper>
    );
}
