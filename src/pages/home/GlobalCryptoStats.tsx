import { useEffect } from "react";
import { useGetGlobalStatsQuery } from "../../api/crApi";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalStats } from "../../app/appSlice.ts";
import { useFormatNumber } from "../../hooks/useFormatNumber.ts";

import Loading from "../../components/Loading.tsx";
import ErrorPage from "../../components/ErrorPage.tsx";

import { AppDispatch, RootState } from "../../app/store.ts";

export default function GlobalCryptoStats() {
    const dispatch = useDispatch<AppDispatch>();
    const globalStats = useSelector(
        (state: RootState) => state.app.globalStats,
    );
    const { data, isLoading, error, refetch } = useGetGlobalStatsQuery();

    useEffect(() => {
        if (data) {
            dispatch(setGlobalStats(data));
        }
    }, [data, dispatch]);

    useEffect(() => {
        if (!isLoading && !error && globalStats === null) {
            console.log(globalStats);
            refetch();
        }
    }, [globalStats]);

    if (error) {
        console.log(error);
        return <ErrorPage err={error} />;
    }

    if (isLoading || !globalStats) {
        return <Loading padding="small" />;
    }

    return (
        <div className="mb-5 md:ml-6 flex flex-col md:flex-row md:flex-wrap gap-y-5 md:gap-x-4 text-center md:text-left animate-fade">
            <div className="md:w-80">
                <h2 className="text-2xl opacity-40">Total Cryptocurrencies</h2>
                <p className="text-5xl">{globalStats?.data?.totalCoins}</p>
            </div>
            <div className="md:w-80">
                <h2 className="text-2xl opacity-40">Total Markets</h2>
                <p className="text-5xl">{globalStats?.data?.totalMarkets}</p>
            </div>
            <div className="md:w-80">
                <h2 className="text-2xl opacity-40">Total Market Cap</h2>
                <p className="text-5xl">
                    {useFormatNumber(
                        Number(globalStats?.data?.totalMarketCap),
                        true,
                    )}
                </p>
            </div>
            <div className="md:w-80">
                <h2 className="text-2xl opacity-40">Total Exchanges</h2>
                <p className="text-5xl">{globalStats?.data?.totalExchanges}</p>
            </div>
            <div className="md:w-80">
                <h2 className="text-2xl opacity-40">Total 24h Volume</h2>
                <p className="text-5xl">
                    {useFormatNumber(
                        Number(globalStats?.data?.total24hVolume),
                        true,
                    )}
                </p>
            </div>
            <div className="md:w-80">
                <h2 className="text-2xl opacity-40">Bitcoin Dominance</h2>
                <p className="text-5xl">
                    {globalStats?.data?.btcDominance.toFixed(2)}%
                </p>
            </div>
        </div>
    );
}
