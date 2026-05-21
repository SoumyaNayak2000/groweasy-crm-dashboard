"use client";

import { useEffect } from "react";

import {
    useOrganizationStore,
    useLeadStore,
    useUIStore,
} from "@/store";

export function useOrganizationEffects() {

    const activeOrganization =
        useOrganizationStore(
            (state) =>
                state.activeOrganization
        );

    const clearSelectedLead =
        useLeadStore(
            (state) =>
                state.clearSelectedLead
        );

    const closeLeadDetails =
        useUIStore(
            (state) =>
                state.closeLeadDetails
        );

    useEffect(() => {

        clearSelectedLead();

        closeLeadDetails();

    }, [
        activeOrganization,
        clearSelectedLead,
        closeLeadDetails,
    ]);
}