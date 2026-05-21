const columns = [
    "LEAD NAME",
    "EMAIL",
    "CONTACT",
    "DATE CREATED",
    "COMPANY",
    "STATUS",
    "QUALITY",
    "LEAD OWNER",
    "SOURCE",
    "NEXT FOLLOW UP",
    "CALL STATUS TODAY",
    "ACQUISITION_SOURCE",
    "ACTIONS",
];

export default function LeadsTableHeader() {
    return (
        <div
            className="
                grid
                min-w-[1900px]
                grid-cols-[220px_280px_180px_180px_180px_140px_120px_180px_160px_190px_220px_200px_140px]
                border-b
                border-[#ececec]
                bg-white
                px-5
                py-4
            "
        >
            {columns.map((column) => (
                <div
                    key={column}
                    className="
                        text-[13px]
                        font-[700]
                        tracking-[0.04em]
                        text-[#111111]
                    "
                >
                    {column}
                </div>
            ))}
        </div>
    );
}