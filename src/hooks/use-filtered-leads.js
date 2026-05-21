import { useMemo } from "react";

import {
    useLeadStore,
    useFilterStore, useOrganizationStore
} from "@/store";

export function useFilteredLeads() {

    const leads =
        useLeadStore(
            (state) => state.leads
        );

    const filters =
        useFilterStore(
            (state) => state.filters
        );

    const searchQuery =
        useFilterStore(
            (state) => state.searchQuery
        );

    const activeOrganization =
        useOrganizationStore(
            (state) =>
                state.activeOrganization
        );

    return useMemo(() => {

        let filtered = [...leads];

        if (activeOrganization?.id) {

            filtered = filtered.filter(
                (lead) =>
                    lead.org_id ===
                    activeOrganization.id
            );
        }


        // SEARCH


        if (searchQuery) {

            const query =
                searchQuery.toLowerCase();

            filtered = filtered.filter(
                (lead) =>
                    lead?.email
                        ?.toLowerCase()
                        ?.includes(query) ||

                    lead?.mobile
                        ?.toLowerCase()
                        ?.includes(query)
            );
        }


        // STATUS


        if (filters.status) {

            filtered = filtered.filter(
                (lead) =>
                    lead?.crm?.status ===
                    filters.status
            );
        }


        // SOURCE


        if (filters.source) {

            filtered = filtered.filter(
                (lead) =>
                    lead?.source?.type ===
                    filters.source
            );
        }


        // OWNER


        if (filters.owner) {

            filtered = filtered.filter(
                (lead) =>
                    lead?.owner_uid ===
                    filters.owner
            );
        }

        return filtered;

    }, [
        leads,
        filters,
        searchQuery,
        activeOrganization
    ]);
}