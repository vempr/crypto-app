import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageHome from "./pages/home/PageHome.tsx";
import PageNotFound from "./pages/notfound/PageNotFound.tsx";
import PageCurrencies from "./pages/cryptocurrencies/PageCurrencies.tsx";
import PageCoin from "./pages/cryptocurrency/PageCoin.tsx";
import PageExchanges from "./pages/exchanges/PageExchanges.tsx";
import PageNews from "./pages/news/PageNews.tsx";

import { Provider } from "react-redux";
import store from "./app/store.ts";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/crypto-app/",
        element: <PageHome />,
        errorElement: <PageNotFound />,
    },
    {
        path: "/crypto-app/cryptocurrencies",
        element: <PageCurrencies />,
    },
    {
        path: "/crypto-app/cryptocurrency/:coinUuid",
        element: <PageCoin />,
    },
    {
        path: "/crypto-app/exchanges",
        element: <PageExchanges />,
    },
    {
        path: "/crypto-app/news",
        element: <PageNews />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
