import { Sidebar } from "@/components";
export default function DashboardLayout({ children }) {
    return (
        <div
            className="
        sr-dashboard-layout
        flex
        min-h-screen
        bg-[#fafafa]
      "
        >
            <Sidebar />

            <main
                className="
          sr-dashboard-main
          flex-1
          overflow-hidden
        "
            >
                {children}
            </main>
        </div>
    );
}