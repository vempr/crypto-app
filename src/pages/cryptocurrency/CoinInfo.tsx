import { useFormatNumber } from "../../hooks/useFormatNumber.ts";

import ValueStats from "./ValueStats.tsx";
import OtherStats from "./OtherStats.tsx";
import InfoLinks from "./InfoLinks.tsx";

import { CoinExtendedResponse } from "../../type.ts";

interface Response {
    data: CoinExtendedResponse;
}

export default function CoinInfo({ data }: Response) {
    const name = data.data.coin.name;
    const description = data.data.coin.description;
    const price = useFormatNumber(Number(data.data.coin.price), true);
    const rank = data.data.coin.rank;
    const vol24h = useFormatNumber(Number(data.data.coin["24hVolume"]), true);
    const marketCap = useFormatNumber(Number(data.data.coin.marketCap), true);
    const allTimeHigh = useFormatNumber(
        Number(data.data.coin.allTimeHigh.price),
    );
    const numMarkets = data.data.coin.numberOfMarkets;
    const numExchanges = data.data.coin.numberOfExchanges;
    const supplyApproved = data.data.coin.supply.confirmed;
    const supplyTotal = useFormatNumber(
        Number(data.data.coin.supply.total),
        false,
    );
    const supplyCirculating = useFormatNumber(
        Number(data.data.coin.supply.circulating),
        false,
    );
    const links = data.data.coin.links;

    return (
        <div className="mb-10">
            <div className="flex flex-col items-center justify-center text-center mb-5">
                <h1 className="font-bold text-4xl text-sky-500 my-3">
                    What is {name}?
                </h1>
                <p className="w-4/5 md:w-2/3 font-semibold">{description}</p>
            </div>
            <div className="flex flex-col px-8 justify-center md:justify-normal">
                <ValueStats
                    name={name}
                    price={price}
                    rank={rank}
                    vol24h={vol24h}
                    marketCap={marketCap}
                    allTimeHigh={allTimeHigh}
                />
                <OtherStats
                    name={name}
                    numMarkets={numMarkets}
                    numExchanges={numExchanges}
                    supplyApproved={supplyApproved}
                    supplyTotal={supplyTotal}
                    supplyCirculating={supplyCirculating}
                />
                <InfoLinks
                    name={name}
                    links={links}
                />
            </div>
        </div>
    );
}
