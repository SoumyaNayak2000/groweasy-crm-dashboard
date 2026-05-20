import { ChevronDown } from "lucide-react";

export default function SidebarOrganizationCard() {
    return (
        <button
            className="
        sr-sidebar-organization-card
        mt-4
        flex
        w-full
        items-center
        justify-between
        rounded-xl
        border
        border-[#dbe4e6]
        bg-[#edf8f5]
        px-3
        py-2.5
      "
        >
            <div className="flex items-center gap-3">
                <div
                    className="
            sr-sidebar-org-logo
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            bg-[#0f766e]
            text-xs
            font-bold
            text-white
          "
                >
                    G
                </div>

                <div className="text-left">
                    <h4
                        className="
              text-[12px]
              font-semibold
              text-[#111827]
            "
                    >
                        GrowEasy AI
                    </h4>

                    <p
                        className="
              text-[10px]
              uppercase
              text-[#6b7280]
            "
                    >
                        Owner
                    </p>
                </div>
            </div>

            <ChevronDown
                size={16}
                className="text-[#6b7280]"
            />
        </button>
    );
}