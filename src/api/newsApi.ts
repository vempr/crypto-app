import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NewsData } from "../type.ts";

const ddgApiHeaders = {
    "X-RapidAPI-Key": "8b047c8f90msha23e816c5aad70fp150c22jsn5fb298b9ff29",
    "X-RapidAPI-Host": "duckduckgo10.p.rapidapi.com",
};

const baseUrl = "https://duckduckgo10.p.rapidapi.com";

const createRequest = (url: string, userSearch?: string) => ({
    url: baseUrl + url,
    headers: ddgApiHeaders,
    params: {
        term: "crypto " + userSearch,
        safeSearch: "strict",
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
