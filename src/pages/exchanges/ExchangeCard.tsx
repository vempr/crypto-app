import { Exchange } from "../../type.ts";

interface ExchangeProps {
    exchange: Exchange;
}

export default function ExchangeCard({ exchange }: ExchangeProps) {
    return (
        <a
            href={exchange.url}
            target="_blank"
            className="hover:cursor-pointer hover:shadow-md transition-shadow"
        >
            {
                <div className="w-72 p-4 flex flex-col items-center md:items-start bg-white">
                    <div className="w-64 flex flex-row justify-between">
                        <p className="flex flex-row items-center font-bold">
                            {exchange.trust_score_rank}. {exchange.name}
                        </p>
                        <img
                            src={exchange.image}
                            className="w-8 h-8"
                        />
                    </div>
                    <hr className="h-px w-64 my-5 bg-gray-200 border-0" />
                    <ul>
                        <li>Year Established: {exchange.year_established}</li>
                        <li>Country: {exchange.country}</li>
                        <li>Trust Score: {exchange.trust_score}</li>
                    </ul>
                </div>
            }
        </a>
    );
}

/* [
  {
    "id": "bybit_spot",
    "name": "Bybit",
    "year_established": 2018,
    "country": "British Virgin Islands",
    "description": "Bybit is a cryptocurrency exchange that offers a professional platform featuring an ultra-fast matching engine, excellent customer service and multilingual community support for crypto traders of all levels. Established in March 2018, Bybit currently serves more than 10 million users and institutions offering access to over 100 assets and contracts across Spot, Futures and Options, launchpad projects, earn products, an NFT Marketplace and more. Bybit is a proud partner of Formula One racing team, Oracle Red Bull Racing, esports teams NAVI, Astralis, Alliance, Virtus.pro, Made in Brazil (MIBR), City Esports, and Oracle Red Bull Racing Esports, and association football (soccer) teams Borussia Dortmund and Avispa Fukuoka.",
    "url": "https://www.bybit.com",
    "image": "https://assets.coingecko.com/markets/images/698/small/bybit_spot.png?1706864649",
    "has_trading_incentive": false,
    "trust_score": 10,
    "trust_score_rank": 1,
    "trade_volume_24h_btc": 46134.24754615457,
    "trade_volume_24h_btc_normalized": 37594.11233338977
  },
  {
    "id": "okex",
    "name": "OKX",
    "year_established": 2017,
    "country": "Seychelles",
    "description": "",
    "url": "https://www.okx.com",
    "image": "https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png?1706864283",
    "has_trading_incentive": false,
    "trust_score": 10,
    "trust_score_rank": 2,
    "trade_volume_24h_btc": 33922.77426932834,
    "trade_volume_24h_btc_normalized": 29311.310400302205
  },
] */
