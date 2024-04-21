// for navbar and footer
import { Link } from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";
import ReactLogo from "../images/react-logo.png";

export default function Logo() {
    const scrollTop = useScrollTop();

    return (
        <Link
            to="/"
            onClick={scrollTop}
        >
            <div className="disable-selection flex flex-row justify-center items-center gap-2 pt-4 pb-2 text-white hover:cursor-pointer">
                <p className="text-2xl font-bold">CryptoApp</p>
                <img
                    className="w-11 h-10"
                    src={ReactLogo}
                    alt="React Logo"
                />
            </div>
        </Link>
    );
}
