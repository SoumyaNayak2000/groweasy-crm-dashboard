import {
    BriefcaseBusiness,
} from "lucide-react";

import {
    MAIN_MENU,
    CONTROL_CENTER_MENU,
} from "@/constants/sidebar-menu";

import SidebarNavItem from "./sidebar-nav-item";
import SidebarSectionLabel from "./sidebar-section-label";
import SidebarOrganizationCard from "./sidebar-organization-card";

export default function Sidebar() {
    return (
        <aside
            className="
        sr-sidebar
        hidden
        md:flex
        h-screen
        w-[245px]
        flex-col
        border-r
        border-[#e5e7eb]
        bg-white
      "
        >
            <div
                className="
          sr-sidebar-inner
          flex
          h-full
          flex-col
          px-4
          py-5
        "
            >
                {/* Logo */}

                <div
                    className="
            sr-sidebar-logo-wrapper
            flex
            items-center
            gap-2
          "
                >
                    <div
                        className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-black
              text-white
            "
                    >
                        <BriefcaseBusiness size={15} />
                    </div>

                    <h1
                        className="
              text-[24px]
              font-bold
              tracking-[-0.03em]
              text-black
            "
                    >
                        GrowEasy
                    </h1>
                </div>

                {/* Organization */}

                <SidebarOrganizationCard />

                {/* Main Menu */}

                <div className="mt-6">
                    <SidebarSectionLabel label="Main" />

                    <div className="space-y-1">
                        {MAIN_MENU.map((item) => (
                            <SidebarNavItem
                                key={item.id}
                                label={item.label}
                                icon={item.icon}
                                active={item.active}
                            />
                        ))}
                    </div>
                </div>

                {/* Control Center */}

                <div className="mt-7">
                    <SidebarSectionLabel label="Control Center" />

                    <div className="space-y-1">
                        {CONTROL_CENTER_MENU.map((item) => (
                            <SidebarNavItem
                                key={item.id}
                                label={item.label}
                                icon={item.icon}
                            />
                        ))}
                    </div>
                </div>

                {/* Footer */}

                <div className="mt-auto pt-6">
                    <button
                        className="
              sr-sidebar-business-center
              flex
              items-center
              gap-3
              px-3
              py-2
              text-[12px]
              font-medium
              text-[#374151]
            "
                    >
                        <div
                            className="
                h-4
                w-4
                rounded-full
                border
                border-[#9ca3af]
              "
                        />

                        <span>Business Center</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}