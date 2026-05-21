import {
    LeadFilters,
    LeadsWorkspace,
    PerformanceOverview
} from "@/components";

import {
    dashboardBodyStyles,
    sectionCardStyles,
} from "@/utils/layout-classes";

export default function DashboardBody() {
    return (
        <div className={dashboardBodyStyles}>

            {/* FILTERS */}

            <section
                className={`
                    ${sectionCardStyles}
                    mb-6
                    p-5
                `}
            >
                <LeadFilters />
            </section>

            {/* STATS */}

            <PerformanceOverview />

            {/* TABLE */}

            <LeadsWorkspace />
        </div>
    );
}