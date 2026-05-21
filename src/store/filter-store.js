import { create } from "zustand";

const initialFilters = {
    status: "",
    source: "",
    owner: "",
    quality: "",

    quickDateFilter: "",

    startDate: null,

    endDate: null,
};

export const useFilterStore = create((set) => ({


    // STATE


    searchQuery: "",

    filters: initialFilters,


    // SEARCH


    setSearchQuery: (query) =>
        set({
            searchQuery: query,
        }),

    clearSearchQuery: () =>
        set({
            searchQuery: "",
        }),


    // FILTERS


    setFilters: (newFilters) =>
        set((state) => ({
            filters: {
                ...state.filters,
                ...newFilters,
            },
        })),

    resetFilters: () =>
        set({
            filters: initialFilters,
        }),
}));