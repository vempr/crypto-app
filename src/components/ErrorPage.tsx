import Header from "./Header";

export default function ErrorPage({ err }: { err: any }) {
    return (
        <div>
            <Header title="Error!" />
            <p className="text-center md:text-left md:ml-8 -translate-y-7 h-screen">
                {JSON.stringify(err)}
            </p>
        </div>
    );
}
