export default function QuickFilterGroup({
    children,
}) {
    return (
        <div
            className="
                mb-5
                flex
                flex-wrap
                items-center
                gap-3
                
            "
        >
            {children}
        </div>
    );
}