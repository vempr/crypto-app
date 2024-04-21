import { Link } from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";
import ghLogo from "../images/github-logo.png";
import Logo from "./Logo";

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollTop = useScrollTop();

    return (
        <footer className="bg-sky-950 text-center py-10">
            <h1 className="text-4xl font-bold text-white">
                Stay Ahead in the Crypto Game.
            </h1>
            <Logo />
            <div className="flex flex-row justify-center gap-x-4 text-sky-700 my-2">
                <Link
                    to="/"
                    onClick={scrollTop}
                >
                    Home
                </Link>
                <Link
                    to="/cryptocurrencies"
                    onClick={scrollTop}
                >
                    Cryptocurrencies
                </Link>
                <Link
                    to="/exchanges"
                    onClick={scrollTop}
                >
                    Exchanges
                </Link>
                <Link
                    to="/news"
                    onClick={scrollTop}
                >
                    News
                </Link>
            </div>
            <p className="font-bold text-white my-2">
                &copy;{year} CryptoApp - All Rights Reserved
            </p>
            <div className="flex justify-center">
                <a href="https://github.com/vempr/crypto-app">
                    <img
                        src={ghLogo}
                        alt="GitHub Repository"
                        className="w-16 h-16 mt-5"
                    />
                </a>
            </div>
        </footer>
    );
}
