import { dashboardHeaderStyles } from "@/utils/layout-classes"
import { Button } from "@/components";

export default function DashboardHeader() {
    return (
        <header
            className={dashboardHeaderStyles}
        >
            {/* LEFT */}

            <div>
                <h1
                    className="
            text-[28px]
            font-semibold
            tracking-tight
            text-neutral-900
          "
                >
                    Manage Leads
                </h1>

                <p
                    className="
            mt-1
            text-sm
            text-neutral-500
          "
                >
                    Track and manage all your CRM leads
                </p>
            </div>

            {/* RIGHT */}

            <div
                className="
          flex
          items-center
          gap-3
        "
            >
                <Button variant="secondary">
                    Export
                </Button>

                <Button>
                    Add Lead
                </Button>
            </div>
        </header>
    );
}