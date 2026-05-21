export default function FiltersToolbar({
    children,
    actions,
}) {
    return (
        <div
            className="
                mb-5
                flex
                items-start
                justify-between
                gap-4
            "
        >
            <div
                className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                "
            >
                {children}
            </div>

            {actions}
        </div>
    );
}