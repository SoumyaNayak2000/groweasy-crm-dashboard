"use client";

import { useState } from "react";

import Modal from "@/components/ui/modal";

import Button from "@/components/ui/button";

import { useUIStore, useLeadStore } from "@/store";

export default function FollowupModal() {

    const {
        isFollowupModalOpen,
        selectedFollowupLead,
        closeFollowupModal,
    } = useUIStore();
    const addLeadFollowup =
        useLeadStore(
            (state) =>
                state.addLeadFollowup
        );

    const [followupDate, setFollowupDate] =
        useState("");

    if (!isFollowupModalOpen) {
        return null;
    }

    function handleSaveFollowup() {

        if (!followupDate) {
            return;
        }

        const followupData = {
            id: crypto.randomUUID(),

            leadId:
                selectedFollowupLead?.id,

            leadName:
                selectedFollowupLead?.name,

            followupAt: followupDate,

            createdAt:
                new Date().toISOString(),
        };

        // STORE FOLLOWUP

        addLeadFollowup(
            followupData
        );

        console.log(
            "FOLLOWUP SAVED:",
            followupData
        );

        // RESET

        setFollowupDate("");

        closeFollowupModal();
    }

    return (
        <Modal
            title="Set Next Follow Up"
            onClose={closeFollowupModal}
        >
            <div>

                {/* LEAD */}

                <p
                    className="
                        mb-5
                        text-sm
                        text-neutral-500
                    "
                >
                    for{" "}

                    <span
                        className="
                            font-semibold
                            text-neutral-900
                        "
                    >
                        {selectedFollowupLead?.name}
                    </span>
                </p>

                {/* FIELD */}

                <div className="mb-6">

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                            text-neutral-700
                        "
                    >
                        Follow Up Date & Time
                    </label>

                    <input
                        type="datetime-local"
                        value={followupDate}
                        onChange={(event) =>
                            setFollowupDate(
                                event.target.value
                            )
                        }
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-neutral-200
                            px-4
                            text-sm
                            outline-none
                            transition-all
                            focus:border-[#165E52]
                            focus:ring-4
                            focus:ring-[#165E52]/10
                        "
                    />
                </div>

                {/* ACTIONS */}

                <div
                    className="
                        flex
                        items-center
                        justify-end
                        gap-3
                    "
                >
                    <Button
                        variant="secondary"
                        onClick={closeFollowupModal}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="success"
                        onClick={handleSaveFollowup}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </Modal>
    );
}