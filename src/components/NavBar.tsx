import {
    faHouse,
    faShop,
    faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";
import RouterLinks from "./RouterLinks";

const links = [
    {
        to: "/",
        display: "Home",
        icon: faHouse,
    },
    {
        to: "/cryptocurrencies",
        display: "Cryptocurrencies",
        icon: faBitcoin,
    },
    {
        to: "/exchanges",
        display: "Exchanges",
        icon: faShop,
    },
    {
        to: "/news",
        display: "News",
        icon: faNewspaper,
    },
];

export default function NavBar() {
    return (
        <div className="bg-sky-950 text-white w-dvw md:w-56 flex flex-col md:gap-y-5">
            <Logo />
            <nav
                className="flex flex-row md:flex-col justify-center gap-x-2 md:gap-y-2"
                aria-label="navigation"
            >
                <RouterLinks links={links} />
            </nav>
        </div>
    );
}
