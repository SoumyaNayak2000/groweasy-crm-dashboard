"use client";

import { useUIStore } from "@/store";

import LeadsTable from "../../table/leads-table";

import LeadDetailsPanel from "../../lead-panel/lead-details-panel";

export default function LeadsWorkspace() {

    const isLeadDetailsOpen =
        useUIStore(
            (state) =>
                state.isLeadDetailsOpen
        );

    return (
        <div
            className="
                flex
                gap-5
                mt-10
            "
        >

            {/* TABLE */}

            <div
                className={`
                    transition-all
                    duration-300

                    ${isLeadDetailsOpen
                        ? "w-[60%]"
                        : "w-full"
                    }
                `}
            >
                <LeadsTable />
            </div>

            {/* PANEL */}

            {isLeadDetailsOpen && (
                <div className="w-[40%]">
                    <LeadDetailsPanel />
                </div>
            )}

        </div>
    );
}