import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";

export default function PageNotFound() {
    return (
        <PageWrapper>
            <Header title="Page Not Found!" />
            <div className="flex justify-center md:justify-normal">
                <p className="w-3/5 text-center md:text-left md:ml-8 -translate-y-7 h-screen">
                    Please navigate to your desired page using the navigation
                    bar. Thanks!
                </p>
            </div>
        </PageWrapper>
    );
}
