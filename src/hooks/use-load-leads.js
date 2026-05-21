"use client";

import { useEffect } from "react";

import { getLeads } from "@/services/apis/lead-api";

import { useLeadStore } from "@/store";

export function useLoadLeads() {

    const setLeads =
        useLeadStore(
            (state) => state.setLeads
        );

    const setSelectedLeadId =
        useLeadStore(
            (state) =>
                state.setSelectedLeadId
        );

    const setLeadsLoading =
        useLeadStore(
            (state) =>
                state.setLeadsLoading
        );

    const setLeadError =
        useLeadStore(
            (state) =>
                state.setLeadError
        );

    useEffect(() => {

        let mounted = true;

        async function loadLeads() {

            try {

                setLeadsLoading(true);

                const response =
                    await getLeads();

                if (!mounted) return;

                const leads =
                    response?.data || [];

                setLeads(leads);

                if (leads.length > 0) {
                    setSelectedLeadId(
                        leads[0].id
                    );
                }

                setLeadError(null);

            } catch (error) {

                console.error(
                    "Failed to load leads:",
                    error
                );

                setLeadError(
                    error?.message ||
                    "Failed to fetch leads"
                );

            } finally {

                if (mounted) {
                    setLeadsLoading(false);
                }
            }
        }

        loadLeads();

        return () => {
            mounted = false;
        };

    }, [
        setLeads,
        setSelectedLeadId,
        setLeadsLoading,
        setLeadError,
    ]);
}