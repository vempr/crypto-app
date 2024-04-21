import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetCoinsQuery } from "../../api/crApi.ts";
import { setCoinsOverview } from "../../app/appSlice.ts";

import Loading from "../../components/Loading.tsx";
import CoinCard from "../../components/CoinCard.tsx";
import ErrorPage from "../../components/ErrorPage.tsx";

import { AppDispatch, RootState } from "../../app/store.ts";
import { Coin, Page } from "../../type.ts";

export default function TopCurrencies({ page }: Page) {
    const dispatch = useDispatch<AppDispatch>();
    const coinsOverview = useSelector(
        (state: RootState) => state.app.coins.coinsOverview,
    );
    const { data, isLoading, error, refetch } = useGetCoinsQuery();

    useEffect(() => {
        if (data) {
            dispatch(setCoinsOverview(data.data.coins));
        }
    }, [data]);

    useEffect(() => {
        if (!isLoading && !error && JSON.stringify(coinsOverview) === "[]") {
            console.log(coinsOverview);
            refetch();
        }
    }, [coinsOverview]);

    if (error) {
        console.log(error);
        console.log(data);
        return <ErrorPage err={error} />;
    }

    if (isLoading || !coinsOverview) {
        return <Loading padding="big" />;
    }

    const numCards = page === "home" ? 10 : 100;
    const finalCoins = coinsOverview.slice(0, numCards);

    return (
        <div className="flex flex-col items-center md:flex-row md:items-start flex-wrap md:ml-6 gap-7 mb-10 animate-fade">
            {finalCoins.map((coin: Coin) => (
                <div key={coin.name}>
                    <CoinCard coin={coin} />
                </div>
            ))}
        </div>
    );
}
