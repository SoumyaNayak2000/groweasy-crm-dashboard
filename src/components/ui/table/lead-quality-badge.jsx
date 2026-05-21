export default function LeadQualityBadge({
    quality,
}) {
    return (
        <div
            className="
                flex
                h-7
                min-w-7
                items-center
                justify-center
                rounded-full
                bg-[#f3f4f6]
                px-2
                text-[13px]
                font-semibold
                text-[#6b7280]
            "
        >
            {quality || "-"}
        </div>
    );
}