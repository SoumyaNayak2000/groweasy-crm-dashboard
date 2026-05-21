export default function LeadSourceBadge({
    source,
}) {
    return (
        <div
            className="
                inline-flex
                items-center
                rounded-full
                bg-[#f3f4f6]
                px-3
                py-1.5
                text-[13px]
                font-medium
                text-[#5f6368]
            "
        >
            {source}
        </div>
    );
}