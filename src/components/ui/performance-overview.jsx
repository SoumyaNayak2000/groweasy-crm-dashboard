"use client";

import DashboardStatCard from "@/components/ui/dashboard-stat-card";

import { useLeadStats } from "@/hooks/use-lead-stats";

export default function PerformanceOverview() {

    const {
        totalLeads,
        contactedLeads,
        salesDone,
        conversionRate,
    } = useLeadStats();

    return (
        <section
            className="
                mt-7
            "
        >
            {/* HEADER */}

            <h2
                className="
                    mb-4
                    text-[30px]
                    font-bold
                    tracking-tight
                    text-black
                "
            >
                Performance Overview
            </h2>

            {/* GRID */}

            <div
                className="
                    grid
                    grid-cols-1
                    gap-5
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >
                <DashboardStatCard
                    title="Total Leads"
                    value={totalLeads}
                    type="total"
                />

                <DashboardStatCard
                    title="Contacted Leads"
                    value={contactedLeads}
                    type="contacted"
                />

                <DashboardStatCard
                    title="Sales Done"
                    value={salesDone}
                    type="sales"
                />

                <DashboardStatCard
                    title="Conversion Rate"
                    value={`${conversionRate}%`}
                    type="conversion"
                />
            </div>
        </section>
    );
}