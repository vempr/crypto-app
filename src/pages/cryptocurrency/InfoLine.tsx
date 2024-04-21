import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface InfoProps {
    icon: IconDefinition;
    property: string;
    value: string | number | boolean;
}

export default function InfoLine({ icon, property, value }: InfoProps) {
    let val = <p className="font-bold">{value}</p>;
    if (typeof value == "boolean") {
        switch (value) {
            case true:
                val = <FontAwesomeIcon icon={faCheck} />;
                break;
            default:
                val = <FontAwesomeIcon icon={faXmark} />;
                break;
        }
    }

    return (
        <div className="w-full flex justify-between border-b-2 my-2">
            <div className="flex flex-row gap-x-3 items-center">
                <div className="opacity-85">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <p>{property}</p>
            </div>
            {val}
        </div>
    );
}
