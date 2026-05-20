import { create } from "zustand";

export const useOrganizationStore = create((set) => ({
    organizations: [],

    activeOrganization: null,

    isLoadingOrganizations: false,

    organizationsError: null,

    setOrganizations: (organizations) =>
        set({
            organizations,
        }),

    setActiveOrganization: (organization) =>
        set({
            activeOrganization: organization,
        }),

    setOrganizationsLoading: (status) =>
        set({
            isLoadingOrganizations: status,
        }),

    setOrganizationsError: (error) =>
        set({
            organizationsError: error,
        }),
}));