export default function LeadStatusBadge({
    status,
}) {
    const normalizedStatus =
        status || "Not Dialed";

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
                font-semibold
                text-[#6b7280]
            "
        >
            {normalizedStatus}
        </div>
    );
}