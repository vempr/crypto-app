import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import coinrankingApi from "../api/crApi";
import newsApi from "../api/newsApi";
import coingeckoApi from "../api/cgApi";

const store = configureStore({
    reducer: {
        app: appReducer,
        [coinrankingApi.reducerPath]: coinrankingApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
        [coingeckoApi.reducerPath]: coingeckoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            coinrankingApi.middleware,
            newsApi.middleware,
            coingeckoApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
