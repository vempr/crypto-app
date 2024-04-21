import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";
import LatestNews from "../shared-components/LatestNews";

export default function PageNews() {
    return (
        <PageWrapper>
            <div className="flex flex-col md:w-100vw-navbar">
                <Header title="The Latest Cryptocurrency News" />
                <LatestNews page="news" />
            </div>
        </PageWrapper>
    );
}
