import { classMerge } from "@/utils/cn";

export default function SidebarOrganizationItem({
    organization,
    active,
    onClick,
}) {

    // console.log(organization);



    return (
        <button
            onClick={onClick}
            className={classMerge(
                `
          sr-sidebar-organization-item
          flex
          w-full
          items-center
          gap-3
          rounded-lg
          px-3
          py-2
          transition-all
          duration-200
          cursor-pointer
        `,
                active
                    ? "bg-[#dff5ee]"
                    : "hover:bg-gray-100"
            )}
        >
            <div
                className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-md
          bg-[#0f766e]
          text-xs
          font-semibold
          text-white
        "
            >
                {organization.name.charAt(0)}
            </div>

            <div className="text-left">
                <h4
                    className="
            text-[12px]
            font-medium
            text-[#111827]
          "
                >
                    {organization.name}
                </h4>

                <p
                    className="
            text-[10px]
            uppercase
            text-[#6b7280]
          "
                >
                    {organization.role}
                </p>
            </div>
        </button>
    );
}