// only for home page sections
import { Link } from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";

interface Link {
    link: string;
}

export default function ShowMore({ link }: Link) {
    const scrollTop = useScrollTop();

    return (
        <div className="mr-3 text-xl text-right items-center justify-center hidden xl:flex">
            <div className="text-sky-500 hover:text-sky-600">
                <Link
                    to={link}
                    onClick={scrollTop}
                >
                    Show More
                </Link>
            </div>
        </div>
    );
}
