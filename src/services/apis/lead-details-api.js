import { leadDetailsResponse }
    from "@/data/lead-details.js";

export async function getLeadDetails(
    leadId
) {

    return new Promise((resolve) => {

        setTimeout(() => {

            const details =
                leadDetailsResponse?.data || [];


            const matchedLead =
                details.find(
                    (item) =>
                        item?.data?.lead?.id ===
                        leadId
                );

            if (matchedLead?.data) {

                resolve(
                    matchedLead.data
                );

                return;
            }


            resolve(null);

        }, 500);
    });
}