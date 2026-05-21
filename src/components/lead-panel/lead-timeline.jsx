function formatTime(timestamp) {

    if (!timestamp?._seconds) {
        return "";
    }

    return new Date(
        timestamp._seconds * 1000
    ).toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
    });
}

export default function LeadTimeline({
    activities = [],
}) {

    if (!activities.length) {

        return (
            <div>

                <h3
                    className="
                        mb-5
                        text-[22px]
                        font-bold
                        text-neutral-900
                    "
                >
                    Activity Timeline
                </h3>

                <div
                    className="
                        flex
                        min-h-[220px]
                        flex-col
                        items-center
                        justify-center
                        rounded-[24px]
                        border
                        border-dashed
                        border-neutral-200
                        bg-neutral-50
                        px-6
                        text-center
                    "
                >


                    <div
                        className="
                            mb-4
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            shadow-sm
                        "
                    >
                        <span className="text-2xl">
                            🕘
                        </span>
                    </div>


                    <h4
                        className="
                            text-[18px]
                            font-semibold
                            text-neutral-800
                        "
                    >
                        No Timeline Available
                    </h4>

                    <p
                        className="
                            mt-2
                            max-w-[320px]
                            text-[14px]
                            leading-6
                            text-neutral-500
                        "
                    >
                        No activity history found
                        for this lead yet.
                    </p>

                </div>
            </div>
        );
    }


    return (
        <div>

            {/* HEADER */}

            <h3
                className="
                    mb-5
                    text-[22px]
                    font-bold
                    text-neutral-900
                "
            >
                Activity Timeline
            </h3>

            {/* TIMELINE LIST */}

            <div className="space-y-4">

                {activities.map((activity) => (

                    <div
                        key={activity.id}
                        className="
                            rounded-[22px]
                            border
                            border-[#ececec]
                            bg-white
                            p-5
                            transition-all
                            duration-200
                            hover:border-[#d9d9d9]
                        "
                    >

                        {/* TIME */}

                        <p
                            className="
                                mb-2
                                text-[13px]
                                font-medium
                                text-[#6b7280]
                            "
                        >
                            {formatTime(
                                activity.created_at
                            )}
                        </p>

                        {/* TITLE */}

                        <h4
                            className="
                                mb-2
                                text-[18px]
                                font-semibold
                                text-[#0f766e]
                            "
                        >
                            {activity.title}
                        </h4>

                        {/* DESCRIPTION */}

                        <p
                            className="
                                mb-4
                                text-[15px]
                                leading-7
                                text-[#5f6368]
                            "
                        >
                            {
                                activity.description
                            }
                        </p>

                        {/* CONTENT */}

                        {activity?.metadata
                            ?.content && (

                                <div
                                    className="
                                    rounded-[18px]
                                    border
                                    border-[#ececec]
                                    bg-[#fafafa]
                                    p-4
                                    text-[14px]
                                    leading-7
                                    text-[#4b5563]
                                "
                                >
                                    {
                                        activity
                                            .metadata
                                            .content
                                    }
                                </div>
                            )}

                    </div>
                ))}

            </div>
        </div>
    );
}