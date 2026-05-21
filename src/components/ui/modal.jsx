"use client";

import { X } from "lucide-react";

export default function Modal({
    title,
    children,
    onClose,
}) {
    return (
        <div
            className="
                fixed
                inset-0
                z-[999]
                flex
                items-center
                justify-center
                bg-black/40
                backdrop-blur-[2px]
                animate-in
                fade-in
            "
        >
            <div
                className="
                    w-full
                    max-w-[520px]
                    rounded-[28px]
                    bg-white
                    p-6
                    shadow-2xl
                    animate-in
                    zoom-in-95
                    duration-200
                "
            >
                {/* HEADER */}

                <div
                    className="
                        mb-6
                        flex
                        items-start
                        justify-between
                    "
                >
                    <div>
                        <h2
                            className="
                                text-[28px]
                                font-bold
                                tracking-tight
                                text-neutral-900
                            "
                        >
                            {title}
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="
                            rounded-xl
                            p-2
                            text-neutral-500
                            transition-all
                            hover:bg-neutral-100
                            hover:text-neutral-900
                        "
                    >
                        <X size={20} />
                    </button>
                </div>

                {children}
            </div>
        </div>
    );
}