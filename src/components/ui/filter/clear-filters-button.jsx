import { RotateCcw } from "lucide-react";

export default function ClearFiltersButton({
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-neutral-500
                transition-colors
                hover:text-black
                cursor-pointer
            "
        >
            <RotateCcw size={14} />

            Clear All
        </button>
    );
}