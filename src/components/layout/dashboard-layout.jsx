import { Sidebar } from "@/components";
export default function DashboardLayout({ children }) {
    return (
        <div
            className="
        sr-dashboard-layout
        flex
        min-h-screen
        bg-[#f7f8fa]
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