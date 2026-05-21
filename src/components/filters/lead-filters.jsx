"use client";

import {
    useLeadStore,
    useFilterStore,
} from "@/store";

import {
    FilterSelect,
    FilterPill,
    FilterChip,
    DateRangeFilter,
    ClearFiltersButton,
    FiltersToolbar,
    QuickFilterGroup,
    ActiveFilterGroup,
} from "@/components";

const quickFilters = [
    "Today",
    "Last 7 Days",
    "Last 30 Days",
    "Last 2 Months",
];

export default function LeadFilters() {

    const leads =
        useLeadStore(
            (state) => state.leads
        );

    const filters =
        useFilterStore(
            (state) => state.filters
        );

    const setFilters =
        useFilterStore(
            (state) => state.setFilters
        );

    const resetFilters =
        useFilterStore(
            (state) => state.resetFilters
        );


    const statusOptions = [
        ...new Set(
            leads.map(
                (lead) =>
                    lead?.crm?.status ||
                    "Not Dialed"
            )
        ),
    ];

    const sourceOptions = [
        ...new Set(
            leads.map(
                (lead) =>
                    lead?.source?.type
            )
        ),
    ];

    const ownerOptions = [
        ...new Set(
            leads.map(
                (lead) =>
                    lead?.owner_uid
            )
        ),
    ];

    const qualityOptions = [
        "High",
        "Medium",
        "Low",
    ];

    return (
        <section>

            <FiltersToolbar
                actions={
                    <ClearFiltersButton
                        onClick={resetFilters}
                    />
                }
            >
                <FilterSelect
                    label="Status"
                    value={filters.status}
                    options={statusOptions}
                    onChange={(value) =>
                        setFilters({
                            status: value,
                        })
                    }
                />

                <FilterSelect
                    label="Quality"
                    value={filters.quality}
                    options={qualityOptions}
                    onChange={(value) =>
                        setFilters({
                            quality: value,
                        })
                    }
                />

                <FilterSelect
                    label="Source"
                    value={filters.source}
                    options={sourceOptions}
                    onChange={(value) =>
                        setFilters({
                            source: value,
                        })
                    }
                />

                <FilterSelect
                    label="Owner"
                    value={filters.owner}
                    options={ownerOptions}
                    onChange={(value) =>
                        setFilters({
                            owner: value,
                        })
                    }
                />
            </FiltersToolbar>

            {/* DATE RANGE */}

            <DateRangeFilter
                startDate={filters.startDate}
                endDate={filters.endDate}
                onStartDateChange={(value) =>
                    setFilters({
                        startDate: value,
                    })
                }
                onEndDateChange={(value) =>
                    setFilters({
                        endDate: value,
                    })
                }
                onClear={() =>
                    setFilters({
                        startDate: null,
                        endDate: null,
                    })
                }
            />

            {/* QUICK FILTERS */}

            <QuickFilterGroup>
                {quickFilters.map((filter) => (
                    <FilterPill
                        key={filter}
                        active={
                            filters.quickDateFilter ===
                            filter
                        }
                        onClick={() =>
                            setFilters({
                                quickDateFilter:
                                    filter,
                            })
                        }
                    >
                        {filter}
                    </FilterPill>
                ))}
            </QuickFilterGroup>

            {/* ACTIVE FILTERS */}
            <ActiveFilterGroup>

                {filters.status && (
                    <FilterChip
                        label={`Status: ${filters.status}`}
                        onRemove={() =>
                            setFilters({
                                status: "",
                            })
                        }
                    />
                )}

                {filters.source && (
                    <FilterChip
                        label={`Source: ${filters.source}`}
                        onRemove={() =>
                            setFilters({
                                source: "",
                            })
                        }
                    />
                )}

                {filters.owner && (
                    <FilterChip
                        label={`Owner: ${filters.owner}`}
                        onRemove={() =>
                            setFilters({
                                owner: "",
                            })
                        }
                    />
                )}

            </ActiveFilterGroup>
        </section>
    );
}