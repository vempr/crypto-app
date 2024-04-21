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
        path: "/",
        element: <PageHome />,
        errorElement: <PageNotFound />,
    },
    {
        path: "/cryptocurrencies",
        element: <PageCurrencies />,
    },
    {
        path: "/cryptocurrency/:coinUuid",
        element: <PageCoin />,
    },
    {
        path: "/exchanges",
        element: <PageExchanges />,
    },
    {
        path: "/news",
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
