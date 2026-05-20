import { DashboardLayout } from "@/components";

export default function HomePage() {
  return (
    <DashboardLayout>
      <section
        className="
          sr-dashboard-content
          p-6
        "
      >
        <div
          className="
            sr-page-header
            mb-6
          "
        >
          <h1 className="text-2xl font-semibold text-gray-900">
            Manage Your Leads
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Monitor lead status, assign tasks, and close deals faster.
          </p>
        </div>

        <div
          className="
            sr-content-placeholder
            rounded-2xl
            border
            border-dashed
            border-gray-300
            bg-white
            p-10
          "
        >
          CRM Dashboard Content
        </div>
      </section>
    </DashboardLayout>
  );
}