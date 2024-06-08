import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewsData } from "../type.ts";

const baseUrl = "https://news-api14.p.rapidapi.com";

const createRequest = () => ({
    url: baseUrl + "/v2/search/articles?query=crypto&language=en&limit=50",
    headers: {
        "x-rapidapi-key": "8b047c8f90msha23e816c5aad70fp150c22jsn5fb298b9ff29",
        "x-rapidapi-host": "news-api14.p.rapidapi.com",
    },
});

const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNewsData: builder.query<NewsData, void>({
            query: () => createRequest(),
        }),
    }),
});

export const { useGetNewsDataQuery } = newsApi;
export default newsApi;
