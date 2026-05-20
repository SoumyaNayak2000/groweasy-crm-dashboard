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
            gap-3
          "
                >
                    <div
                        className="
          sr-logo-icon
          flex
          items-center
          justify-center
        "
                    > <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 44 44"
                        className="h-7 w-7"
                    >
                            <g clipPath="url(#groweasy_svg__a)">
                                <rect
                                    width="43"
                                    height="43"
                                    x="0.5"
                                    y="0.5"
                                    fill="#0F0F0F"
                                    rx="9.594"
                                />

                                <path
                                    fill="#FBFBFB"
                                    d="m28.282 22.731-21.5 21.501-6.795-6.794 21.5-21.501z"
                                />

                                <path
                                    fill="#FBFBFB"
                                    d="M8.877 15.938H28.28v6.795H8.877z"
                                />

                                <path
                                    fill="#FBFBFB"
                                    d="M28.28 15.938V35.34h-6.794V15.938z"
                                />

                                <path
                                    fill="#FBFBFB"
                                    d="M28.28 15.938V35.34h-6.793V15.938z"
                                />
                            </g>

                            <defs>
                                <clipPath id="groweasy_svg__a">
                                    <rect
                                        width="43"
                                        height="43"
                                        x="0.5"
                                        y="0.5"
                                        fill="#fff"
                                        rx="9.594"
                                    />
                                </clipPath>
                            </defs>
                        </svg></div>
                    <h1
                        className="
          sr-logo-text md:ml-2 text-base md:text-2xl text-black tracking-tight font-poppins font-semibold
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