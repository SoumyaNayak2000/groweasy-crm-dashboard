"use client";

import {
    useLeadStore,
    useUIStore,
    useFilterStore,
} from "@/store";

import {
    getLeadDetails,
} from "@/services/apis/lead-details-api";

import { useFilteredLeads } from "@/hooks/use-filtered-leads";

import LeadsTableHeader from "../ui/table/leads-table-header";

import LeadsTableRow from "../ui/table/leads-table-row";

export default function LeadsTable() {


    // FILTERED LEADS

    const leads =
        useFilteredLeads();

    // SEARCH

    const searchQuery =
        useFilterStore(
            (state) => state.searchQuery
        );

    const setSearchQuery =
        useFilterStore(
            (state) => state.setSearchQuery
        );

    // LEAD STORE

    const setSelectedLeadId =
        useLeadStore(
            (state) =>
                state.setSelectedLeadId
        );

    const setSelectedLeadDetails =
        useLeadStore(
            (state) =>
                state.setSelectedLeadDetails
        );

    const setLeadActivities =
        useLeadStore(
            (state) =>
                state.setLeadActivities
        );
    const setLeadDetailsLoading = useLeadStore((state) => state.setLeadDetailsLoading)

    // UI STORE

    const openLeadDetails =
        useUIStore(
            (state) =>
                state.openLeadDetails
        );


    // HANDLE LEAD CLICK

    async function handleLeadClick(
        lead
    ) {

        try {
            setLeadDetailsLoading(true);

            // RESET PREVIOUS STATE

            openLeadDetails();

            setSelectedLeadId(lead.id);


            // FETCH DETAILS

            const response =
                await getLeadDetails(
                    lead.id
                );

            const data =
                response;


            // DETAILS FOUND


            if (data?.lead) {

                setSelectedLeadDetails(
                    data.lead
                );

                setLeadActivities(
                    data.activities || []
                );

                setLeadDetailsLoading(false);

                return;
            }


            // NO DETAILS FOUND


            setSelectedLeadDetails(
                lead
            );

            setLeadActivities([]);
            setLeadDetailsLoading(false);

        } catch (error) {

            console.error(
                "Lead details fetch failed:",
                error
            );


            // FALLBACK TO BASIC LEAD


            setSelectedLeadDetails(
                lead
            );

            setLeadActivities([]);
            setLeadDetailsLoading(false);
        }
    }

    return (
        <section
            className="
                overflow-hidden
                rounded-[28px]
                border
                border-neutral-200
                bg-white
            "
        >

            {/* HEADER */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-neutral-200
                    px-6
                    py-5
                "
            >

                <h2
                    className="
                        text-[32px]
                        font-bold
                        text-neutral-900
                    "
                >
                    Your Leads
                </h2>

                {/* SEARCH */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <input
                        value={searchQuery}
                        onChange={(event) =>
                            setSearchQuery(
                                event.target.value
                            )
                        }
                        placeholder="Enter email or phone number..."
                        className="
                            h-11
                            w-[320px]
                            rounded-xl
                            border
                            border-neutral-200
                            px-4
                            text-sm
                            outline-none
                        "
                    />

                    <button
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#0f766e]
                            text-white
                        "
                    >
                        ⌕
                    </button>

                </div>
            </div>

            {/* TABLE */}

            <div className="overflow-x-auto">

                <LeadsTableHeader />

                <div>

                    {leads.length ? (

                        leads.map((lead) => (
                            <LeadsTableRow
                                key={lead.id}
                                lead={lead}
                                onLeadClick={
                                    handleLeadClick
                                }
                            />
                        ))

                    ) : (

                        <div
                            className="
            flex
            h-[300px]
            items-center
            justify-center
        "
                        >

                            <div className="text-center">

                                <h3
                                    className="
                    text-lg
                    font-semibold
                    text-neutral-700
                "
                                >
                                    No Leads Found
                                </h3>

                                <p
                                    className="
                    mt-2
                    text-sm
                    text-neutral-500
                "
                                >
                                    No leads available for this organization.
                                </p>

                            </div>

                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}