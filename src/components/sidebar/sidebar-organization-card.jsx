"use client";

import { useEffect, useState } from "react";

import { ChevronDown, ChevronRight } from "lucide-react";

import { getOrganizations } from "@/services/apis/organization-api";

import { useOrganizationStore } from "@/store/organization-store";

import SidebarOrganizationItem from "./sidebar-organization-item";


export default function SidebarOrganizationCard() {
    const [isDropdownOpen, setIsDropdownOpen] =
        useState(false);

    const {
        organizations,
        activeOrganization,
        isLoadingOrganizations,
        setOrganizations,
        setActiveOrganization,
        setOrganizationsLoading,
        setOrganizationsError,
    } = useOrganizationStore();

    useEffect(() => {
        async function loadOrganizations() {
            try {
                setOrganizationsLoading(true);

                const response = await getOrganizations();

                setOrganizations(response.data);

                const defaultOrganization =
                    response.data.find(
                        (organization) =>
                            organization.name === "GrowEasy AI"
                    ) || response.data[0];

                setActiveOrganization(defaultOrganization);
            } catch (error) {
                setOrganizationsError(error);
            } finally {
                setOrganizationsLoading(false);
            }
        }

        loadOrganizations();
    }, [
        setOrganizations,
        setActiveOrganization,
        setOrganizationsLoading,
        setOrganizationsError,
    ]);

    return (
        <div className="sr-sidebar-organization-wrapper relative mt-4">
            <button
                onClick={() =>
                    setIsDropdownOpen((prev) => !prev)
                }
                className="
    sr-sidebar-organization-card
    flex
    w-full
    items-center
    justify-between
    rounded-[24px]
    border
    border-[#e7e7e7]
    bg-white
    px-[14px]
    py-[12px]
    shadow-[0_1px_2px_rgba(0,0,0,0.02)]
    transition-all
    duration-200
    hover:border-[#dcdcdc]
  "
            >
                {/* LEFT */}

                <div className="flex items-center gap-[14px]">
                    {/* AVATAR */}

                    <div
                        className="
        sr-sidebar-organization-avatar
        flex
        h-[44px]
        w-[44px]
        items-center
        justify-center
        rounded-[14px]
        bg-[#0f766e]
        text-[18px]
        font-semibold
        text-white
      "
                    >
                        {activeOrganization?.name?.charAt(0)}
                    </div>

                    {/* TEXT */}

                    <div className="text-left leading-none">
                        <h4
                            className="
          text-[15px]
          font-semibold
          tracking-[-0.02em]
          text-[#111111]
        "
                        >
                            {isLoadingOrganizations
                                ? "Loading..."
                                : activeOrganization?.name}
                        </h4>

                        <p
                            className="
          mt-[7px]
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.08em]
          text-[#a1a1a1]
        "
                        >
                            {activeOrganization?.role}
                        </p>
                    </div>
                </div>

                {/* RIGHT */}

                <ChevronRight
                    size={22}
                    strokeWidth={2}
                    className="
      text-[#a3a3a3]
    "
                />
            </button>

            {isDropdownOpen && (
                <div
                    className="
            sr-sidebar-organization-dropdown
            absolute
            left-0
            top-[110%]
            z-50
            w-full
            rounded-xl
            border
            border-gray-200
            bg-white
            p-2
            shadow-lg
          "
                >
                    <div className="space-y-1">
                        {organizations.map((organization) => (
                            <SidebarOrganizationItem
                                key={organization.id}
                                organization={organization}
                                active={
                                    activeOrganization?.id ===
                                    organization.id
                                }
                                onClick={() => {
                                    setActiveOrganization(organization);

                                    setIsDropdownOpen(false);
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}