import { organizationsResponse } from "@/data/organizations";

export async function getOrganizations() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(organizationsResponse);
        }, 500);
    });
}