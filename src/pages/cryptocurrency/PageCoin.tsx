import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetCoinQuery } from "../../api/crApi.ts";
import { addCoinExtended } from "../../app/appSlice.ts";

import Loading from "../../components/Loading.tsx";
import PageWrapper from "../../components/PageWrapper.tsx";
import TimeSelector from "./TimeSelector.tsx";
import HeaderChartInfo from "./HeaderChartInfo.tsx";
import CoinChart from "./CoinChart.tsx";
import HorizontalRule from "../../components/HorizontalRule.tsx";
import CoinInfo from "./CoinInfo.tsx";
import ErrorPage from "../../components/ErrorPage.tsx";

interface Params extends Record<string, string | undefined> {
    coinUuid: string;
}

export default function PageCoin() {
    const [timePeriod, setTimePeriod] = useState<string>("30d");
    const params = useParams<Params>();
    const paramsUuid = String(params.coinUuid);
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetCoinQuery(paramsUuid);

    useEffect(() => {
        if (data) {
            console.log(data);
            dispatch(addCoinExtended(data));
        }
    }, [data]);

    if (error) {
        console.log(error);
        return (
            <PageWrapper>
                <ErrorPage err={error} />
            </PageWrapper>
        );
    }

    if (isLoading || !data) {
        return (
            <PageWrapper>
                <Loading padding="big" />
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <div>
                <HeaderChartInfo data={data} />
                <TimeSelector
                    timePeriod={timePeriod}
                    setTimePeriod={setTimePeriod}
                />
                <div className="flex justify-center">
                    <CoinChart
                        paramsUuid={paramsUuid}
                        timePeriod={timePeriod}
                    />
                </div>
                <HorizontalRule />
                <CoinInfo data={data} />
            </div>
        </PageWrapper>
    );
}
