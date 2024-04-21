import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
    GlobalStats,
    CoinsData,
    CoinExtendedResponse,
    CoinPriceResponse,
} from "../type.ts";

const coinrankingApiHeaders = {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({
    url,
    headers: coinrankingApiHeaders,
});

const coinrankingApi = createApi({
    reducerPath: "coinrankingApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getGlobalStats: builder.query<GlobalStats, void>({
            query: () =>
                createRequest("/stats?referenceCurrencyUuid=yhjMzLPhuIDl"),
        }),
        getCoins: builder.query<CoinsData, void>({
            query: () =>
                createRequest(
                    "/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0",
                ),
        }),
        getCoin: builder.query<CoinExtendedResponse, string>({
            query: (coin) =>
                createRequest(
                    `/coin/${coin}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
                ),
        }),
        getPriceHistory: builder.query<
            CoinPriceResponse,
            { coin: string; timePeriod: string }
        >({
            query: ({ coin, timePeriod }) =>
                createRequest(
                    `/coin/${coin}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`,
                ),
        }),
    }),
});

export const {
    useGetGlobalStatsQuery,
    useGetCoinsQuery,
    useGetCoinQuery,
    useGetPriceHistoryQuery,
} = coinrankingApi;
export default coinrankingApi;
