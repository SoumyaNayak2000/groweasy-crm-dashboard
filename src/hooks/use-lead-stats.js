import { useMemo } from "react";

import { useFilteredLeads } from "./use-filtered-leads";

export function useLeadStats() {

    const leads =
        useFilteredLeads();

    return useMemo(() => {

        const totalLeads =
            leads.length;

        const contactedLeads =
            leads.filter(
                (lead) =>
                    lead?.crm
                        ?.last_contacted_at
            ).length;

        const salesDone =
            leads.filter(
                (lead) =>
                    lead?.crm?.status ===
                    "Closed Won"
            ).length;

        const conversionRate =
            totalLeads > 0
                ? (
                    (salesDone /
                        totalLeads) *
                    100
                ).toFixed(1)
                : 0;

        return {
            totalLeads,
            contactedLeads,
            salesDone,
            conversionRate,
        };

    }, [leads]);
}