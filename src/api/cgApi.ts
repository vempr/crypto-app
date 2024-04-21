import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ExchangeResponse } from "../type.ts";

const coingeckoApiHeaders = {
    accept: "application/json",
    "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
};

const baseUrl = "https://api.coingecko.com/api/v3";

const createRequest = (url: string) => ({
    url,
    headers: coingeckoApiHeaders,
});

const coingeckoApi = createApi({
    reducerPath: "coingeckoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExchanges: builder.query<ExchangeResponse, void>({
            query: () => createRequest("/exchanges"),
        }),
    }),
});

export const { useGetExchangesQuery } = coingeckoApi;
export default coingeckoApi;
