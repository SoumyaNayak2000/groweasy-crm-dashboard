import { ChevronDown } from "lucide-react";
import { classMerge } from "@/utils/cn";

export default function FilterSelect({
    label,
    value,
    options = [],
    onChange,
    className,
}) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                className={classMerge(
                    `
                    h-11
                    min-w-[130px]
                    appearance-none
                    rounded-full
                    border
                    border-neutral-200
                    bg-white
                    px-5
                    pr-10
                    text-sm
                    font-medium
                    text-neutral-900
                    outline-none
                    transition-colors
                    hover:border-neutral-300
                    `,
                    className
                )}
            >
                <option value="">
                    {label}
                </option>

                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>

            <ChevronDown
                size={16}
                className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-neutral-500
                "
            />
        </div>
    );
}