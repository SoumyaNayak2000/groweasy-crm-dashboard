import { create } from "zustand";

export const useLeadStore = create((set) => ({


    // STATE


    leads: [],

    selectedLeadId: null,

    selectedLeadDetails: null,

    leadActivities: [],

    isLoadingLeads: false,

    isLoadingLeadDetails: false,

    leadError: null,
    followups: [],


    // LEADS


    setLeads: (leads) =>
        set({
            leads,
        }),


    // SELECTED LEAD


    setSelectedLeadId: (leadId) =>
        set({
            selectedLeadId: leadId,
        }),

    setSelectedLeadDetails: (details) =>
        set({
            selectedLeadDetails: details,
        }),

    setLeadActivities: (activities) =>
        set({
            leadActivities: activities,
        }),

    clearSelectedLead: () =>
        set({
            selectedLeadId: null,
            selectedLeadDetails: null,
            leadActivities: [],
        }),

    addLeadFollowup: (followup) =>
        set((state) => ({
            followups: [
                followup,
                ...state.followups,
            ],
        })),


    // LOADING

    setLeadsLoading: (status) =>
        set({
            isLoadingLeads: status,
        }),

    setLeadDetailsLoading: (status) =>
        set({
            isLoadingLeadDetails: status,
        }),

    // ERROR

    setLeadError: (error) =>
        set({
            leadError: error,
        }),
}));