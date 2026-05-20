export default function SidebarSectionLabel({ label }) {
    return (
        <p
            className="
        sr-sidebar-section-label
        mb-3
        px-3
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.12em]
        text-[#9ca3af]
      "
        >
            {label}
        </p>
    );
}