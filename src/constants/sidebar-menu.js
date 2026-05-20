import {
    LayoutDashboard,
    WandSparkles,
    BriefcaseBusiness,
    Users,
    Database,
    UserPlus,
    MessageCircle,
    Phone,
    Columns3,
} from "lucide-react";

export const MAIN_MENU = [
    {
        id: 1,
        label: "Dashboard",
        icon: LayoutDashboard,
        active: false,
    },
    {
        id: 2,
        label: "Generate Leads",
        icon: WandSparkles,
        active: false,
    },
    {
        id: 3,
        label: "Manage Leads",
        icon: BriefcaseBusiness,
        active: true,
    },
    {
        id: 4,
        label: "Engage Leads",
        icon: MessageCircle,
        active: false,
    },
];

export const CONTROL_CENTER_MENU = [
    {
        id: 5,
        label: "Team Members",
        icon: Users,
    },
    {
        id: 6,
        label: "Lead Sources",
        icon: Database,
    },
    {
        id: 7,
        label: "Ad Accounts",
        icon: UserPlus,
    },
    {
        id: 8,
        label: "WhatsApp Account",
        icon: MessageCircle,
    },
    {
        id: 9,
        label: "Tele Calling",
        icon: Phone,
    },
    {
        id: 10,
        label: "CRM Fields",
        icon: Columns3,
    },
];