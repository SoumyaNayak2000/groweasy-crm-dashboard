import { classMerge } from "@/utils/cn";

export default function FilterPill({
    children,
    active,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className={classMerge(
                `
                rounded-full
                border
                px-5
                h-11
                text-sm
                font-medium
                transition-all
                cursor-pointer
                `,
                active
                    ? `
                    border-[#0f766e]
                    bg-[#edf8f5]
                    text-[#0f766e]
                    `
                    : `
                    border-neutral-200
                    bg-white
                    text-neutral-500
                    hover:bg-neutral-50
                    `
            )}
        >
            {children}
        </button>
    );
}