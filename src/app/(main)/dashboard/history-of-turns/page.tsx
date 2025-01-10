import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/Tabs";
import TurnCard from "@/components/molcules/cards/TurnCard";

export default function DashboardHistoryOfTurnsPage() {
  return (
    <div className="lg:rounded-2xl lg:border lg:border-grey-100 lg:bg-white-100 lg:p-6">
      <h2 className="text-body-1 font-medium text-black-400 lg:text-tittle-1">
        تاریخچه نوبت ها
      </h2>
      <Tabs dir="rtl" className="mt-4" defaultValue="current">
        <TabsList>
          <TabsTrigger
            className="me-auto py-1 text-start lg:me-8"
            value="current"
          >
            جاری
          </TabsTrigger>
          <TabsTrigger
            className="me-auto py-1 text-start lg:me-8"
            value="accomplished"
          >
            انجام شده
          </TabsTrigger>
          <TabsTrigger className="py-1 text-start lg:me-8" value="cancelled">
            لغو شده
          </TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          {Array.from({ length: 3 }, (_, idx) => (
            <TurnCard key={idx} />
          ))}
        </TabsContent>
        <TabsContent value="accomplished" className="space-y-4">
          {Array.from({ length: 3 }, (_, idx) => (
            <TurnCard key={idx} />
          ))}
        </TabsContent>
        <TabsContent value="cancelled" className="space-y-4">
          {Array.from({ length: 3 }, (_, idx) => (
            <TurnCard key={idx} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
