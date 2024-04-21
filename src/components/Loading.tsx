import type { Loading } from "../type";

interface Load {
    padding: Loading;
}

export default function Loading({ padding }: Load) {
    const py = padding === "big" ? "h-screen" : "my-8";

    return (
        <div className={`flex items-center justify-center ${py}`}>
            <div
                className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-sky-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            ></div>
        </div>
    );
}
