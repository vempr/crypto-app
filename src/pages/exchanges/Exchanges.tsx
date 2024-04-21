import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetExchangesQuery } from "../../api/cgApi.ts";
import { setExchanges } from "../../app/appSlice.ts";

import Header from "../../components/Header.tsx";
import Loading from "../../components/Loading.tsx";
import ExchangeCard from "./ExchangeCard.tsx";
import ErrorPage from "../../components/ErrorPage.tsx";

import { RootState } from "../../app/store.ts";

export default function Exchanges() {
    const dispatch = useDispatch();
    const exchanges = useSelector((state: RootState) => state.app.exchanges);
    const { data, isLoading, error } = useGetExchangesQuery();

    useEffect(() => {
        if (data) {
            console.log(data);
            dispatch(setExchanges(data));
        }
    }, [data]);

    if (error) {
        console.log(error);
        return <ErrorPage err={error} />;
    }

    if (isLoading || !data) {
        return <Loading padding="big" />;
    }

    return (
        <div className="flex flex-col">
            <div>
                <Header title="Cryptocurrency Exchanges" />
                <p className="text-center md:text-left md:ml-8 -translate-y-7 md:-translate-y-9 text-slate-700">
                    sorted by Trust Score Rank
                </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start flex-wrap md:ml-6 gap-7 mb-10 animate-fade">
                {exchanges &&
                    exchanges.map((exchange) => (
                        <div key={exchange.id}>
                            <ExchangeCard exchange={exchange} />
                        </div>
                    ))}
            </div>
        </div>
    );
}
