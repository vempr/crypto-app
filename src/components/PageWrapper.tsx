import Footer from "./Footer";
import NavBar from "./NavBar";
import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="select-none">
            <div className="flex flex-col md:flex-row bg-gray-100">
                <NavBar />
                <div className="md:w-100vw-navbar">{children}</div>
            </div>
            <Footer />
        </div>
    );
}
