import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NewsData } from "../type.ts";

const ddgApiHeaders = {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_API_KEY,
    "X-RapidAPI-Host": "duckduckgo10.p.rapidapi.com",
};

const baseUrl = "https://duckduckgo10.p.rapidapi.com";

const createRequest = (url: string, userSearch?: string) => ({
    url: baseUrl + url,
    headers: ddgApiHeaders,
    params: {
        term: "crypto " + userSearch,
        safeSearch: "moderate",
        time: "w",
        region: "wt-wt",
        offset: "50",
    },
});

const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNewsData: builder.query<NewsData, string | undefined>({
            query: (userSearch) => createRequest("/search", userSearch),
        }),
    }),
});

export const { useGetNewsDataQuery } = newsApi;
export default newsApi;
