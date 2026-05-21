"use client";

import {
    useLeadStore,
    useUIStore,
} from "@/store";

import {
    Mail,
    Phone,
    Tag,
    Globe,
    User,
    X,
} from "lucide-react";

import LeadTimeline from "./lead-timeline";

export default function LeadDetailsPanel() {
    const selectedLeadDetails =
        useLeadStore(
            (state) =>
                state.selectedLeadDetails
        );

    const leadActivities =
        useLeadStore(
            (state) =>
                state.leadActivities
        );

    const clearSelectedLead =
        useLeadStore(
            (state) =>
                state.clearSelectedLead
        );

    const isLoadingLeadDetails =
        useLeadStore(
            (state) =>
                state.isLoadingLeadDetails
        );

    const closeLeadDetails =
        useUIStore(
            (state) =>
                state.closeLeadDetails
        );

    const lead =
        selectedLeadDetails;


    if (!lead) {
        return null;
    }

    function handleClosePanel() {

        closeLeadDetails();

        clearSelectedLead();
    }

    return (
        <section
            className="
                relative
                h-full
                overflow-y-auto
                rounded-[28px]
                border
                border-neutral-200
                bg-white
                p-5
            "
        >

            {/* LOADER OVERLAY */}

            {isLoadingLeadDetails && (

                <div
                    className="
            absolute
            inset-0
            z-50
            flex
            items-center
            justify-center
            rounded-[28px]
            bg-white/70
            backdrop-blur-[2px]
        "
                >

                    <div
                        className="
                flex
                flex-col
                items-center
            "
                    >

                        {/* SPINNER */}

                        <div
                            className="
                    h-10
                    w-10
                    animate-spin
                    rounded-full
                    border-[3px]
                    border-neutral-200
                    border-t-[#0f766e]
                "
                        />

                        {/* TEXT */}

                        <p
                            className="
                    mt-4
                    text-sm
                    font-medium
                    text-neutral-500
                "
                        >
                            Loading lead details...
                        </p>

                    </div>

                </div>
            )}
            {/* HEADER */}

            <div
                className="
                    mb-5
                    flex
                    items-start
                    justify-between
                "
            >

                <div>

                    <h2
                        className="
                            text-[28px]
                            font-bold
                            text-neutral-900
                        "
                    >
                        {lead?.name}
                    </h2>

                    <div
                        className="
                            mt-3
                            flex
                            flex-wrap
                            items-center
                            gap-2
                        "
                    >

                        <div
                            className="
                                rounded-full
                                bg-[#ffe5e5]
                                px-3
                                py-1
                                text-[12px]
                                font-semibold
                                text-[#ff4d67]
                            "
                        >
                            {lead?.crm?.status ||
                                "Bad Lead"}
                        </div>

                        <div
                            className="
                                rounded-full
                                bg-neutral-100
                                px-3
                                py-1
                                text-[12px]
                                font-semibold
                                text-neutral-500
                            "
                        >
                            Quality -
                        </div>

                    </div>
                </div>

                {/* CLOSE BUTTON */}

                <button
                    onClick={
                        handleClosePanel
                    }
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-neutral-200
                        transition-colors
                        hover:bg-neutral-50
                    "
                >
                    <X size={18} />
                </button>
            </div>

            {/* INFO GRID */}

            <div
                className="
                    mb-6
                    grid
                    grid-cols-2
                    gap-3
                "
            >

                <InfoCard
                    icon={<Mail size={16} />}
                    label="EMAIL"
                    value={lead?.email}
                />

                <InfoCard
                    icon={<Phone size={16} />}
                    label="CONTACT NUMBER"
                    value={lead?.mobile}
                />

                <InfoCard
                    icon={<Tag size={16} />}
                    label="STATUS"
                    value={
                        lead?.crm?.status ||
                        "Bad Lead"
                    }
                />

                <InfoCard
                    icon={<User size={16} />}
                    label="OWNER"
                    value="SHIVAM YADAV"
                />

                <InfoCard
                    icon={<Globe size={16} />}
                    label="SOURCE"
                    value={
                        lead?.source?.type
                    }
                />

                <InfoCard
                    icon={<Tag size={16} />}
                    label="ACQUISITION"
                    value={
                        lead?.custom_fields
                            ?.acquisition_source
                    }
                />

            </div>

            {/* CALL STATUS */}

            <div
                className="
                    mb-6
                    rounded-[20px]
                    border
                    border-neutral-200
                    p-4
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >

                    <div>

                        <h4
                            className="
                                text-[18px]
                                font-semibold
                            "
                        >
                            Call Status Today
                        </h4>

                        <p
                            className="
                                mt-1
                                text-[14px]
                                text-neutral-500
                            "
                        >
                            You have called this
                            lead today.
                        </p>

                    </div>

                    <div
                        className="
                            rounded-xl
                            border
                            border-[#b9e8df]
                            bg-[#edf8f5]
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-[#0f766e]
                        "
                    >
                        Done
                    </div>
                </div>
            </div>

            {/* TIMELINE */}

            <LeadTimeline
                activities={
                    leadActivities
                }
            />
        </section>
    );
}

function InfoCard({
    icon,
    label,
    value,
}) {
    return (
        <div
            className="
                rounded-[18px]
                border
                border-neutral-200
                p-4
            "
        >

            <div
                className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    text-neutral-400
                "
            >

                {icon}

                <span
                    className="
                        text-[11px]
                        font-semibold
                    "
                >
                    {label}
                </span>

            </div>

            <p
                className="
                    break-words
                    text-[15px]
                    font-semibold
                    text-neutral-900
                "
            >
                {value || "-"}
            </p>
        </div>
    );
}