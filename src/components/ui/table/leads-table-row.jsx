"use client";
import { memo } from "react";
import LeadActionsButton from "./lead-actions-button";
import LeadCallStatusButton from "./lead-call-status-button";
import LeadFollowupButton from "./lead-followup-button";
import LeadQualityBadge from "./lead-quality-badge";
import LeadSourceBadge from "./lead-source-badge";
import LeadStatusBadge from "./lead-status-badge";

import { useUIStore } from "@/store";

function formatDate(timestamp) {
    if (!timestamp?._seconds) {
        return "-";
    }

    return new Date(
        timestamp._seconds * 1000
    ).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

function LeadsTableRow({
    lead,
    onLeadClick,
}) {
    const callDone =
        !!lead?.crm?.last_call_done_at;

    // console.log(lead, callDone)
    const openFollowupModal =
        useUIStore(
            (state) =>
                state.openFollowupModal
        );

    return (
        <div
            className="
                grid
                min-w-[1900px]
                cursor-pointer
                grid-cols-[220px_280px_180px_180px_180px_140px_120px_180px_160px_190px_220px_200px_140px]
                items-center
                border-b
                border-[#f3f4f6]
                px-5
                py-4
                transition-all
                hover:bg-[#fafafa]
            "
        >
            <div
                className="
                    truncate
                    text-[15px]
                    font-semibold
                    text-[#111111]
                "
            >
                {lead?.name}
            </div>

            <div
                className="
                    truncate
                    text-[14px]
                    text-[#5f6368]
                "
            >
                {lead?.email}
            </div>

            <div
                className="
                    text-[14px]
                    text-[#5f6368]
                "
            >
                {lead?.mobile}
            </div>

            <div
                className="
                    text-[14px]
                    text-[#5f6368]
                "
            >
                {formatDate(
                    lead?.created_at
                )}
            </div>

            <div
                className="
                    truncate
                    text-[14px]
                    text-[#5f6368]
                "
            >
                {lead?.company}
            </div>

            <LeadStatusBadge
                status={
                    lead?.crm?.status
                }
            />

            <LeadQualityBadge quality={"Bad Lead"} />

            <div
                className="
                    text-[14px]
                    font-medium
                    text-[#5f6368]
                "
            >
                {lead?.name}
            </div>

            <LeadSourceBadge
                source={
                    lead?.source?.type
                }
            />

            <div
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <LeadFollowupButton
                    onClick={() =>
                        openFollowupModal(lead)
                    }
                />
            </div>

            <div
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <LeadCallStatusButton
                    isDone={callDone}
                />
            </div>

            <div
                className="
                    text-[14px]
                    text-[#5f6368]
                "
            >
                {
                    lead?.custom_fields
                        ?.acquisition_source
                }
            </div>

            <div
                onClick={() =>
                    onLeadClick?.(lead)
                }
            >
                <LeadActionsButton />
            </div>
        </div>
    );
}

export default memo(LeadsTableRow);