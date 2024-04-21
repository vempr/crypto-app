interface Title {
    title: string;
}

export default function Header({ title }: Title) {
    return (
        <h1 className="text-4xl md:text-5xl text-sky-500 font-bold pt-5 pb-2 mt-3 mb-6 md:pb-5 px-7 text-center md:text-left">
            {title}
        </h1>
    );
}
