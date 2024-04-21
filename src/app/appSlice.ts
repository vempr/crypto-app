import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
    GlobalStats,
    Coin,
    InitialState,
    NewsData,
    CoinExtendedResponse,
    CoinPriceResponse,
    ExchangeResponse,
} from "../type.ts";

const iniState: InitialState = {
    globalStats: null,
    coins: {
        coinsOverview: null,
        coinsExtended: [],
        coinsHistory: [],
    },
    exchanges: null,
    news: null,
};

const appSlice = createSlice({
    name: "coins",
    initialState: iniState,
    reducers: {
        setGlobalStats: (state, action: PayloadAction<GlobalStats>) => {
            state.globalStats = action.payload;
        },
        setCoinsOverview: (state, action: PayloadAction<Coin[]>) => {
            state.coins.coinsOverview = action.payload;
        },
        addCoinExtended: (
            state,
            action: PayloadAction<CoinExtendedResponse>,
        ) => {
            state.coins.coinsExtended.push(action.payload);
        },
        addCoinHistory: (state, action: PayloadAction<CoinPriceResponse>) => {
            state.coins.coinsHistory.push(action.payload);
        },
        setExchanges: (state, action: PayloadAction<ExchangeResponse>) => {
            state.exchanges = action.payload;
        },
        setNews: (state, action: PayloadAction<NewsData>) => {
            state.news = action.payload;
        },
    },
});

export const {
    setGlobalStats,
    setCoinsOverview,
    addCoinExtended,
    addCoinHistory,
    setExchanges,
    setNews,
} = appSlice.actions;
export default appSlice.reducer;
