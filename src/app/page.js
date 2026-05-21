"use client";

import {
  DashboardLayout,
  DashboardBody,
  DashboardHeader, Loader
} from "@/components";

import { useLoadLeads } from "@/hooks/use-load-leads";
import { useLoadOrganizations } from "@/hooks/use-load-organizations"
import { useOrganizationEffects } from "@/hooks/use-organization-effects"

import FollowupModal from "@/components/modals/followup-modal";

import {
  dashboardShellStyles,
  dashboardContentStyles,
} from "@/utils/layout-classes";

import {
  useLeadStore,
  useOrganizationStore,
} from "@/store";

export default function HomePage() {
  useLoadOrganizations();
  useLoadLeads();
  useOrganizationEffects();

  const isLoadingLeads =
    useLeadStore(
      (state) => state.isLoadingLeads
    );

  const isLoadingOrganizations =
    useOrganizationStore(
      (state) =>
        state.isLoadingOrganizations
    );

  if (
    isLoadingLeads ||
    isLoadingOrganizations
  ) {
    return <Loader />;
  }


  return (<>
    <DashboardLayout>
      <section className={dashboardShellStyles}>
        <div className={dashboardContentStyles}>

          {/* HEADER */}

          <DashboardHeader />

          {/* BODY */}
          <DashboardBody />
        </div>
      </section>
    </DashboardLayout>
    <FollowupModal />
  </>
  );
}