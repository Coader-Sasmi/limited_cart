import {
  ClientBillsOverview,
  ClientExpensesCard,
  ClientStatisticsCard,
} from "@/components";

export default function AdminDashboard() {
  return (
    <section className="admin-container ">
      <div className="flex flex-col admin-gap">
        <ClientStatisticsCard />
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          <ClientExpensesCard />
          <div className="">
            <ClientBillsOverview />
          </div>
        </div>
        {/* <ClientMeetingCards /> */}
      </div>
    </section>
  );
}
