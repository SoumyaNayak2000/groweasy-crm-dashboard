import { Calendar, X } from "lucide-react";

export default function DateRangeFilter({
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
    onClear,
}) {
    return (
        <div className="mb-5">
            <p
                className="
                    mb-3
                    text-sm
                    font-semibold
                    text-neutral-500
                "
            >
                Created Date Range
            </p>

            <div
                className="
                    flex
                    h-[68px]
                    items-center
                    justify-between
                    rounded-3xl
                    border
                    border-neutral-200
                    bg-white
                    px-5
                "
            >
                {/* LEFT */}

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >
                    <Calendar
                        size={22}
                        className="text-neutral-500"
                    />

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <input
                            type="date"
                            value={startDate || ""}
                            onChange={(event) =>
                                onStartDateChange(
                                    event.target.value
                                )
                            }
                            className="
                                bg-transparent
                                text-base
                                font-medium
                                outline-none
                            "
                        />

                        <span className="text-neutral-400">
                            —
                        </span>

                        <input
                            type="date"
                            value={endDate || ""}
                            onChange={(event) =>
                                onEndDateChange(
                                    event.target.value
                                )
                            }
                            className="
                                bg-transparent
                                text-base
                                font-medium
                                outline-none
                            "
                        />
                    </div>
                </div>

                {(startDate || endDate) && (
                    <button
                        onClick={onClear}
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-[#00695c]
                            text-white
                            transition-all
                            hover:scale-105
                            cursor-pointer
                        "
                    >
                        <X size={14} />
                    </button>
                )}
            </div>
        </div>
    );
}