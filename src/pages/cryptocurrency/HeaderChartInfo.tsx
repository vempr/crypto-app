import { useFormatNumber } from "../../hooks/useFormatNumber.ts";

import { CoinExtendedResponse } from "../../type.ts";

import Header from "../../components/Header.tsx";
import HorizontalRule from "../../components/HorizontalRule.tsx";

interface Response {
    data: CoinExtendedResponse;
}

export default function HeaderChartInfo({ data }: Response) {
    const name = data.data.coin.name;
    const abb = data.data.coin.symbol;
    const priceChange = data.data.coin.change;
    const price = useFormatNumber(Number(data.data.coin.price), true);

    return (
        <div>
            <Header title={`${name} (${abb}) Price`} />
            <p className="md:ml-8 -translate-y-6 text-gray-600 text-center md:text-left mx-2 md:m-0">
                {name} Live Price in US Dollar (USD). View value statistics,
                market cap and supply.
            </p>

            <HorizontalRule />

            <div className="flex justify-center">
                <div className="md:w-100vw-graph flex flex-col md:flex-row justify-between items-center">
                    <h2 className="text-sky-500 text-2xl font-bold">
                        {name} Price Chart
                    </h2>
                    <div className="flex gap-x-4 font-bold text-sm md:text-base">
                        <p>Change: {priceChange}%</p>
                        <p>
                            Current {name} Price: {price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
