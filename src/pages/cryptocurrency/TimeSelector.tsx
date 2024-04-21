import { useState, Dispatch, SetStateAction } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SelectorProps {
    timePeriod: string;
    setTimePeriod: Dispatch<SetStateAction<string>>;
}

export default function TimeSelector({
    timePeriod,
    setTimePeriod,
}: SelectorProps) {
    const options = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
    const [optionsVisible, setOptionsVisible] = useState(false);
    const optionsClass = optionsVisible === false ? "hidden" : "block";

    const handleDropdown = () => setOptionsVisible(!optionsVisible);
    const handleClick = (option: string) => {
        setTimePeriod(option);
        setOptionsVisible(false);
    };

    return (
        <div className="flex justify-center md:justify-normal">
            <div className="bg-white w-40 md:ml-6 my-2 shadow-md border border-solid hover:border-sky-500 active:border-sky-600 transition-colors">
                <button
                    onClick={handleDropdown}
                    className="w-40 px-2 py-0.5 flex flex-row justify-between z-10"
                >
                    <div>{timePeriod}</div>
                    <div>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </button>
                <div
                    className={`flex flex-col absolute ${optionsClass} -translate-x-0.5 border border-solid shadow-sm`}
                >
                    {options.map((option) => (
                        <div
                            key={option}
                            className="bg-white w-40"
                        >
                            <button
                                onClick={() => handleClick(option)}
                                className="w-40 px-2 py-0.5 text-left hover:cursor-pointer hover:bg-slate-200"
                            >
                                {option}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
