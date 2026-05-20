import { classMerge } from "@/utils/cn";

export default function SidebarNavItem({
    label,
    icon: Icon,
    active = false,
}) {
    return (
        <button
            className={classMerge(
                `
          sr-sidebar-nav-item
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          px-3
          py-2.5
          text-[12px]
          font-medium
          transition-all
          duration-200
        `,
                active
                    ? `
            bg-[#dff5ee]
            text-[#0f766e]
          `
                    : `
            text-[#374151]
            hover:bg-gray-100
          `
            )}
        >
            <Icon size={15} strokeWidth={2} />

            <span>{label}</span>
        </button>
    );
}