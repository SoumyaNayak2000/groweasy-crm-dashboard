import { classMerge } from "@/utils/cn";

const buttonVariants = {
    primary: `
        bg-[#111111]
        text-white
        shadow-sm
        hover:bg-black
        hover:shadow-md
    `,

    secondary: `
        border
        border-neutral-200
        bg-white
        text-neutral-900
        shadow-sm
        hover:border-neutral-300
        hover:bg-neutral-50
        hover:shadow-md
    `,

    ghost: `
        text-neutral-600
        hover:bg-neutral-100
        hover:text-neutral-900
    `,

    success: `
        bg-[#165E52]
        text-white
        hover:bg-[#134E45]
    `,
};

const buttonSizes = {
    sm: `
        h-9
        px-3
        text-sm
    `,

    md: `
        h-10
        px-4
        text-sm
    `,

    lg: `
        h-11
        px-5
        text-[15px]
    `,
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    disabled = false,
    ...props
}) {
    return (
        <button
            disabled={disabled}
            className={classMerge(
                `
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    font-medium
                    transition-all
                    duration-200
                    disabled:pointer-events-none
                    disabled:opacity-50
                    cursor-pointer
                `,
                buttonVariants[variant],
                buttonSizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}