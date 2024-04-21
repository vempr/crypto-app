import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetPriceHistoryQuery } from "../../api/crApi";
import { addCoinHistory } from "../../app/appSlice.ts";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import ErrorPage from "../../components/ErrorPage.tsx";
import Loading from "../../components/Loading.tsx";

import { Params, CoinPriceResponse } from "../../type.ts";

interface HistoryParams extends Params {
    timePeriod: string;
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
    },
    elements: {
        point: {
            radius: 0,
        },
    },
};

function prepareLabelsData(data: CoinPriceResponse) {
    const labels = data.data.history.map((coin) =>
        new Date(coin.timestamp * 1000).toLocaleDateString(),
    );
    const dataset = data.data.history.map((coin) =>
        Number(coin.price).toFixed(3),
    );
    return [labels.reverse(), dataset.reverse()];
}

export default function CoinChart({ paramsUuid, timePeriod }: HistoryParams) {
    const dispatch = useDispatch();
    const { data, isLoading, error, refetch } = useGetPriceHistoryQuery({
        coin: paramsUuid,
        timePeriod,
    });

    useEffect(() => {
        if (data) {
            console.log(data);
            dispatch(addCoinHistory(data));
        }
    }, [data]);

    useEffect(() => {
        refetch();
        if (data) {
            console.log(data);
            dispatch(addCoinHistory(data));
        }
    }, [timePeriod]);

    if (error) {
        console.log(error);
        return <ErrorPage err={error} />;
    }

    if (isLoading || !data) {
        return <Loading padding="big" />;
    }

    const [labels, dataset] = prepareLabelsData(data);
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: "Price in USD",
                data: dataset,
                borderColor: "rgb(14, 165, 233)",
                backgroundColor: "rgb(14, 165, 233)",
                tension: 0.1,
                pointHoverRadius: 0,
            },
        ],
    };

    return (
        <div className="md:w-100vw-graph mb-6">
            <Line
                data={chartData}
                options={options}
            />
        </div>
    );
}
