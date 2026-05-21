import {
    Users,
    Phone,
    Target,
    CircleDot,
} from "lucide-react";

const iconMap = {
    total: Users,
    contacted: Phone,
    sales: Target,
    conversion: CircleDot,
};

export default function DashboardStatCard({
    title,
    value,
    type,
}) {
    const Icon = iconMap[type];

    return (
        <div
            className="
                sr-dashboard-stat-card
                rounded-[22px]
                border
                border-[#ececec]
                bg-gradient-to-r
                from-white
                to-[#f4fbfa]
                p-5
            "
        >
            {/* TOP */}

            <div
                className="
                    mb-5
                    flex
                    items-start
                    justify-between
                "
            >
                <p
                    className="
                        text-[15px]
                        font-semibold
                        text-[#6b6b6b]
                    "
                >
                    {title}
                </p>

                <Icon
                    size={20}
                    strokeWidth={1.8}
                    className="
                        text-[#a0a0a0]
                    "
                />
            </div>

            {/* VALUE */}

            <h3
                className="
                    text-[46px]
                    font-bold
                    leading-none
                    tracking-[-1px]
                    text-black
                "
            >
                {value}
            </h3>
        </div>
    );
}