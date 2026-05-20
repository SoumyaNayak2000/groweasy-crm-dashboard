import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classerge(...inputs) {
    return twMerge(clsx(inputs));
}