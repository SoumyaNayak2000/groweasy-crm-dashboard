export default function Sidebar() {
    return (
        <aside
            className="
        sr-sidebar
        hidden
        md:flex
        h-screen
        w-[260px]
        flex-col
        border-r
        border-gray-200
        bg-white
      "
        >
            <div
                className="
          sr-sidebar-header
          flex
          items-center
          border-b
          border-gray-100
          px-6
          py-5
        "
            >
                <h1 className="sr-sidebar-logo text-xl font-bold">
                    GrowEasy
                </h1>
            </div>

            <div
                className="
          sr-sidebar-body
          flex-1
          p-4
        "
            >
                <p className="text-sm text-gray-500">
                    Sidebar Navigation
                </p>
            </div>
        </aside>
    );
}