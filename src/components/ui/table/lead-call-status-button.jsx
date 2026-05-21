import { Check } from "lucide-react";

export default function LeadCallStatusButton({
    isDone,
    onClick,
}) {
    if (isDone) {
        return (
            <button
                onClick={onClick}
                className="
                    flex
                    h-9
                    items-center
                    gap-2
                    rounded-[10px]
                    border
                    border-[#b9e8df]
                    bg-[#edf8f5]
                    px-4
                    text-[14px]
                    font-semibold
                    text-[#0f766e]
                "
            >
                <Check size={14} />

                Done
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            className="
                flex
                h-9
                items-center
                gap-2
                rounded-[10px]
                bg-[#0f766e]
                px-4
                text-[14px]
                font-semibold
                text-white
                transition-all
                hover:opacity-90
            "
        >
            <Check size={14} />

            Mark done
        </button>
    );
}