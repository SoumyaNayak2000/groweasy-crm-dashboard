import { Calendar } from "lucide-react";

export default function LeadFollowupButton({
    onClick,
}) {
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
                border-[#ececec]
                bg-[#fafafa]
                px-3
                text-[13px]
                font-semibold
                text-[#6b7280]
                transition-all
                hover:bg-[#f3f4f6]
            "
        >
            <Calendar size={14} />

            Set Follow Up
        </button>
    );
}