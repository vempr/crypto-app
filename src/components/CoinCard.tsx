import { Link } from "react-router-dom";
import { useFormatNumber } from "../hooks/useFormatNumber.ts";
import { useScrollTop } from "../hooks/useScrollTop.ts";

import { Coin } from "../type";

interface CoinProps {
    coin: Coin;
}

export default function CoinCard({ coin }: CoinProps) {
    const scrollTop = useScrollTop();

    return (
        <div className="hover:cursor-pointer hover:shadow-md">
            <Link
                to={`/cryptocurrency/${coin.uuid}`}
                onClick={scrollTop}
            >
                <div className="w-72 p-4 flex flex-col items-center md:items-start bg-white">
                    <div className="w-64 flex flex-row justify-between">
                        <p className="flex flex-row items-center font-bold">
                            {coin.rank}. {coin.name}
                        </p>
                        <img
                            src={coin.iconUrl}
                            className="w-8 h-8"
                        />
                    </div>
                    <hr className="h-px w-64 my-5 bg-gray-200 border-0" />
                    <ul>
                        <li>
                            Price: {useFormatNumber(Number(coin.price), true)}
                        </li>
                        <li>
                            Market Cap:{" "}
                            {useFormatNumber(Number(coin.marketCap), true)}
                        </li>
                        <li>
                            Daily Change:{" "}
                            <span
                                className={`${Number(coin.change) < 0 ? "text-red-600" : "text-green-600"}`}
                            >
                                {coin.change}%
                            </span>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
    );
}
