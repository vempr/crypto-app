import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

//

export interface Data {
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
    btcDominance: number;
}

export interface GlobalStats {
    status: string;
    data: Data;
}

//

export interface Coin {
    uuid: string;
    symbol: string;
    name: string;
    price: string;
    iconUrl: string;
    rank: number;
    marketCap: string;
    change: string;
}

export interface CoinsData {
    status: string;
    data: {
        stats: {
            [key: string]: string;
        };
        coins: Coin[];
    };
}

//

export interface CoinExtendedData {
    uuid: string;
    symbol: string;
    name: string;
    description: string;
    color: string;
    iconUrl: string;
    websiteUrl: string;
    links: {
        name: string;
        url: string;
        type: string;
    }[];
    supply: {
        confirmed: boolean;
        supplyAt: number;
        max: string;
        total: string;
        circulating: string;
    };
    numberOfMarkets: number;
    numberOfExchanges: number;
    "24hVolume": string;
    marketCap: string;
    fullyDilutedMarketCap: string;
    price: string;
    btcPrice: string;
    priceAt: number;
    change: string;
    rank: number;
    sparkline: (string | null)[];
    allTimeHigh: {
        price: string;
        timestamp: number;
    };
    coinrankingUrl: string;
}

export interface CoinExtendedResponse {
    status: string;
    data: {
        coin: CoinExtendedData;
    };
}

export interface CoinPrice {
    price: string;
    timestamp: number;
}

export interface CoinPriceResponse {
    status: string;
    data: {
        change: string;
        history: CoinPrice[];
    };
}

//

export interface Exchange {
    id: string;
    name: string;
    year_established: number;
    country: string;
    description: string;
    url: string;
    image: string;
    has_trading_incentive: boolean;
    trust_score: number;
    trust_score_rank: number;
    trade_volume_24h_btc: number;
    trade_volume_24h_btc_normalized: number;
}

export type ExchangeResponse = Exchange[];

//

export interface News {
    title: string;
    url: string;
    excerpt: string;
    thumbnail: string;
    publisher: {
        name: string;
        favicon: string | undefined;
    }
}

export interface NewsData {
    success: string;
    data: News[];
}

//

export interface InitialState {
    globalStats: GlobalStats | null;
    coins: {
        coinsOverview: Coin[] | null;
        coinsExtended: CoinExtendedResponse[];
        coinsHistory: CoinPriceResponse[];
    };
    exchanges: Exchange[] | null;
    news: NewsData | null;
}

//

export type FetchError = FetchBaseQueryError | SerializedError;
export interface Page {
    page: "home" | "cryptocurrencies" | "news";
}

export type Loading = "small" | "big"; // margin of Loading.tsx component

//

export interface Params {
    paramsUuid: string;
    timePeriod: string;
}

//
