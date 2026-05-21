export default function Loader() {

    return (
        <div
            className="
                flex
                min-h-screen
                items-center
                justify-center
                bg-[#fafafa]
            "
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    gap-4
                "
            >
                {/* SPINNER */}

                <div
                    className="
                        h-14
                        w-14
                        animate-spin
                        rounded-full
                        border-[4px]
                        border-[#e5e7eb]
                        border-t-[#111111]
                    "
                />

                {/* TEXT */}

                <div className="text-center">
                    <h2
                        className="
                            text-lg
                            font-semibold
                            text-[#111111]
                        "
                    >
                        Loading GrowEasy
                    </h2>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-[#6b7280]
                        "
                    >
                        Please wait...
                    </p>
                </div>
            </div>
        </div>
    );
}