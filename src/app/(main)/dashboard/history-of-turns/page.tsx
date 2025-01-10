import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/Tabs";
import TurnCard from "@/components/molcules/cards/TurnCard";

const DashboardAccountPage = () => {
  return (
    <div className="rounded-2xl border border-grey-100 bg-white-100 lg:p-6">
      <h2 className="text-body-1 font-medium text-black-400 lg:text-tittle-1">
        تاریخچه نوبت ها
      </h2>
      <Tabs dir="rtl" className="mt-4" defaultValue="current">
        <TabsList>
          <TabsTrigger className="flex-1 py-1 text-start" value="current">
            جاری
          </TabsTrigger>
          <TabsTrigger className="flex-1 py-1 text-start" value="accomplished">
            انجام شده
          </TabsTrigger>
          <TabsTrigger className="flex-1 py-1 text-start" value="cancelled">
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
};

export default DashboardAccountPage;
