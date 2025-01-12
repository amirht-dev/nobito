"use client";

import Chip from "@/components/atoms/Chip";
import { NoteText_Outline } from "@/components/atoms/icons/Content-Edit/NoteText";
import { Notification_Outline } from "@/components/atoms/icons/Notifications/Notification";
import MessageCard from "@/components/molcules/cards/MessageCard";
import clsx from "clsx";
import { useState } from "react";

const messages = [
  "notification",
  "order",
  "other",
  "notification",
  "order",
  "other",
] as const;

const MessagesList = () => {
  const [variant, setVariant] = useState<(typeof messages)[number] | "all">(
    "all",
  );

  const filteredMessages =
    variant === "all"
      ? messages
      : messages.filter((msgVar) => variant === msgVar);

  return (
    <>
      <div className="my-6 flex gap-4 max-lg:justify-between">
        <Chip asChild>
          <button
            className={clsx(
              variant === "all" &&
                "border-primary-500 font-semibold text-primary-500",
            )}
            onClick={() => setVariant("all")}
          >
            همه پیام ها
          </button>
        </Chip>
        <Chip asChild prefixIcon={<Notification_Outline />}>
          <button
            className={clsx(
              variant === "notification" &&
                "border-primary-500 font-semibold text-primary-500",
            )}
            onClick={() => setVariant("notification")}
          >
            اطلاع رسانی ها
          </button>
        </Chip>
        <Chip asChild prefixIcon={<NoteText_Outline />}>
          <button
            className={clsx(
              variant === "order" &&
                "border-primary-500 font-semibold text-primary-500",
            )}
            onClick={() => setVariant("order")}
          >
            دستور پزشک
          </button>
        </Chip>
      </div>

      <div className="space-y-4">
        {filteredMessages.map((variant, idx) => (
          <MessageCard key={idx} variant={variant} />
        ))}
      </div>
    </>
  );
};

export default MessagesList;
