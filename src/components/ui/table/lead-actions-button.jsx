import { ChevronRight } from "lucide-react";

export default function LeadActionsButton() {
    return (
        <button
            className="
                flex
                h-10
                items-center
                gap-2
                rounded-[12px]
                border
                border-[#ececec]
                bg-white
                px-4
                text-[14px]
                font-semibold
                text-[#5f6368]
                transition-all
                hover:bg-[#fafafa]
                cursor-pointer
            "
        >
            More

            <ChevronRight size={15} />
        </button>
    );
}