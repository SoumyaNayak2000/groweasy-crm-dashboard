import { leadsResponse } from "@/data/leads.js";

export async function getLeads() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(leadsResponse);
        }, 600);
    });
}