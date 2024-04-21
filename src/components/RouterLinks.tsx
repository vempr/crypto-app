import { Link, useLocation } from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Links {
    links: {
        to: string;
        display: string;
        icon: IconProp;
    }[];
}

/*
<FontAwesomeIcon icon="fa-solid fa-house" size="xs" style={{color: "#ffffff",}} />
<FontAwesomeIcon icon="fa-brands fa-bitcoin" />
<FontAwesomeIcon icon="fa-solid fa-shop" />
<FontAwesomeIcon icon="fa-solid fa-newspaper" />
*/

export default function RouterLinks({ links }: Links) {
    const params = useLocation();
    const isActive = (path: string) => {
        return params.pathname === path;
    };

    const scrollTop = useScrollTop();

    return (
        <div className="flex flex-row md:flex-col gap-x-2 md:gap-0">
            {links.map((link) => (
                <Link
                    to={link.to}
                    key={link.to}
                    onClick={scrollTop}
                >
                    <div
                        className={`flex flex-row p-0 md:pl-5 py-2 md:hover:bg-sky-500 hover:cursor-pointer hover:text-neutral-200 hover:transition-all ${isActive(link.to) ? "text-sky-500" : ""}`}
                    >
                        <div className="hidden md:block md:mr-2 md:w-5">
                            <FontAwesomeIcon icon={link.icon} />
                        </div>
                        <div>{link.display}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
