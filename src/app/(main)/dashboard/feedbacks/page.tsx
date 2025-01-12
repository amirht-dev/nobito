import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/Tabs";
import FeedbackCard from "@/components/molcules/cards/FeedbackCard";

const MY_FEEDBACKS_TAB_VALUE = "my-feedbacks";

const SAVE_COMMENTS_PENDING_TAB_VALUE = "save-comments-pending";

export default function DashboardFeedbacksPage() {
  return (
    <div className="lg:rounded-2xl lg:border lg:border-grey-100 lg:bg-white-100 lg:p-6">
      <h2 className="text-body-1 font-medium text-black-400 lg:text-tittle-1">
        بازخوردها
      </h2>
      <Tabs dir="rtl" className="mt-4" defaultValue={MY_FEEDBACKS_TAB_VALUE}>
        <TabsList>
          <TabsTrigger
            className="me-auto py-1 text-start lg:me-8"
            value={MY_FEEDBACKS_TAB_VALUE}
          >
            بازخورد های من (3)
          </TabsTrigger>
          <TabsTrigger
            className="py-1 text-start lg:me-8"
            value={SAVE_COMMENTS_PENDING_TAB_VALUE}
          >
            در انتظار ثبت نظر (0)
          </TabsTrigger>
        </TabsList>

        <TabsContent value={MY_FEEDBACKS_TAB_VALUE} className="space-y-6">
          {Array.from({ length: 3 }, (_, idx) => (
            <FeedbackCard key={idx} />
          ))}
        </TabsContent>
        <TabsContent
          value={SAVE_COMMENTS_PENDING_TAB_VALUE}
          className="space-y-6"
        >
          {Array.from({ length: 3 }, (_, idx) => (
            <FeedbackCard key={idx} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
