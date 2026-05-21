import { create } from "zustand";

export const useUIStore = create((set) => ({

    // LEAD DETAILS PANEL

    isLeadDetailsOpen: false,
    isFollowupModalOpen: false,
    selectedFollowupLead: null,

    openLeadDetails: () =>
        set({
            isLeadDetailsOpen: true,
        }),

    closeLeadDetails: () =>
        set({
            isLeadDetailsOpen: false,
        }),

    toggleLeadDetails: () =>
        set((state) => ({
            isLeadDetailsOpen:
                !state.isLeadDetailsOpen,
        })),

    openFollowupModal: (lead) =>
        set({
            isFollowupModalOpen: true,
            selectedFollowupLead: lead,
        }),

    closeFollowupModal: () =>
        set({
            isFollowupModalOpen: false,
            selectedFollowupLead: null,
        }),
}));