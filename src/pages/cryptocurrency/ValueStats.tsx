import {
    faCircleDollarToSlot,
    faHashtag,
    faBolt,
    faMoneyBillTrendUp,
    faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import InfoLine from "./InfoLine";

interface ValueProps {
    name: string;
    price: string;
    rank: number;
    vol24h: string;
    marketCap: string;
    allTimeHigh: string;
}

export default function ValueStats({
    name,
    price,
    rank,
    vol24h,
    marketCap,
    allTimeHigh,
}: ValueProps) {
    return (
        <div className="w-full">
            <div>
                <h1 className="font-bold text-2xl text-sky-500 my-3">
                    {name} Value Statistics
                </h1>
                <p className="w-full text-sm">
                    An overview showing the general statistics of {name}, such
                    as the price and rank, daily volume, market cap, and
                    all-time-high.
                </p>
            </div>
            <div className="w-full flex flex-col my-4">
                <InfoLine
                    icon={faCircleDollarToSlot}
                    property={"Price to USD"}
                    value={price}
                />
                <InfoLine
                    icon={faHashtag}
                    property={"Rank"}
                    value={rank}
                />
                <InfoLine
                    icon={faBolt}
                    property={"24h Volume"}
                    value={vol24h}
                />
                <InfoLine
                    icon={faMoneyBillTrendUp}
                    property={"Market Cap"}
                    value={marketCap}
                />
                <InfoLine
                    icon={faTrophy}
                    property={"All Time High (24h Avg.)"}
                    value={allTimeHigh}
                />
            </div>
        </div>
    );
}
