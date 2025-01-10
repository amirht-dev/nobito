import Button from "@/components/atoms/buttons/Button";
import Chip from "@/components/atoms/Chip";
import { NoteText_Outline } from "@/components/atoms/icons/Content-Edit/NoteText";
import { Notification_Outline } from "@/components/atoms/icons/Notifications/Notification";
import MessageCard from "@/components/molcules/cards/MessageCard";
import MessagesList from "./MessagesList";

export default function DashboardMessagesPage() {
  return (
    <div className="lg:rounded-2xl lg:border lg:border-grey-100 lg:bg-white-100 lg:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-body-1 font-medium text-black-400 lg:text-tittle-1">
          پیغام ها
        </h2>

        <Button size="sm" variant="text" leftIcon={<Notification_Outline />}>
          تغییر پیغام ها به خوانده شده
        </Button>
      </div>

      <hr className="mt-6 h-px border-grey-100" />

      <MessagesList />
    </div>
  );
}
