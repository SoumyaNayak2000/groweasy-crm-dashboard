"use client";

import { useEffect } from "react";

import { getOrganizations } from "@/services/apis/organization-api";

import { useOrganizationStore } from "@/store";

export function useLoadOrganizations() {

    const setOrganizations =
        useOrganizationStore(
            (state) => state.setOrganizations
        );

    const setActiveOrganization =
        useOrganizationStore(
            (state) => state.setActiveOrganization
        );

    const setOrganizationsLoading =
        useOrganizationStore(
            (state) =>
                state.setOrganizationsLoading
        );

    const setOrganizationsError =
        useOrganizationStore(
            (state) =>
                state.setOrganizationsError
        );

    useEffect(() => {

        let mounted = true;

        async function loadOrganizations() {

            try {

                setOrganizationsLoading(true);

                const response =
                    await getOrganizations();

                if (!mounted) return;

                const organizations =
                    response?.data || [];

                setOrganizations(
                    organizations
                );

                const defaultOrganization =
                    organizations.find(
                        (organization) =>
                            organization.name ===
                            "GrowEasy AI"
                    ) || organizations[0];

                setActiveOrganization(
                    defaultOrganization
                );

            } catch (error) {

                setOrganizationsError(
                    error?.message ||
                    "Failed to load organizations"
                );

            } finally {

                if (mounted) {
                    setOrganizationsLoading(false);
                }
            }
        }

        loadOrganizations();

        return () => {
            mounted = false;
        };

    }, [
        setOrganizations,
        setActiveOrganization,
        setOrganizationsLoading,
        setOrganizationsError,
    ]);
}