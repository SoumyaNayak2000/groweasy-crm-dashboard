import { X } from "lucide-react";

export default function FilterChip({
    label,
    onRemove,
}) {
    return (
        <div
            className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#b9e8df]
                bg-[#dff5f0]
                px-4
                h-10
                text-sm
                font-semibold
                text-[#0f766e]
            "
        >
            {label}

            <button
                onClick={onRemove}
                className="
                    flex
                    items-center
                    justify-center
                "
            >
                <X size={14} />
            </button>
        </div>
    );
}