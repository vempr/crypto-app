import {
    faShop,
    faRightLeft,
    faPersonCircleCheck,
    faGlobe,
    faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import InfoLine from "./InfoLine";

interface ValueProps {
    name: string;
    numMarkets: number;
    numExchanges: number;
    supplyApproved: boolean;
    supplyTotal: string;
    supplyCirculating: string;
}

export default function OtherStats({
    name,
    numMarkets,
    numExchanges,
    supplyApproved,
    supplyTotal,
    supplyCirculating,
}: ValueProps) {
    return (
        <div className="w-full">
            <h1 className="font-bold text-2xl text-sky-500 my-3">
                Advanced Statistics
            </h1>
            <p className="w-full text-sm">
                An overview showing the advanced statistics of {name}, such as
                the number of markets, exchanges and the amount of {name}{" "}
                supply.
            </p>
            <div className="w-full flex flex-col my-4">
                <InfoLine
                    icon={faShop}
                    property={"Number Of Markets"}
                    value={numMarkets}
                />
                <InfoLine
                    icon={faRightLeft}
                    property={"Number Of Exchanges"}
                    value={numExchanges}
                />
                <InfoLine
                    icon={faPersonCircleCheck}
                    property={"Approved Supply"}
                    value={supplyApproved}
                />
                <InfoLine
                    icon={faGlobe}
                    property={"Total Supply"}
                    value={supplyTotal}
                />
                <InfoLine
                    icon={faArrowRightToBracket}
                    property={"Circulating Supply"}
                    value={supplyCirculating}
                />
            </div>
        </div>
    );
}
