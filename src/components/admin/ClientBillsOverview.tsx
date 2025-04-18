"use client";
import LeadColumnGraph from "./LeadColumnGraph";

export default function ClientBillsOverview() {
  // const { push } = useRouter();
  //   const { role } = useRouter().query;
  return (
    <div className="h-full admin-card flex flex-col ">
      <div className="w-full">
        <LeadColumnGraph
          barHeight={385}
          title="Bills Overview Of Child Company"
          categories={[
            "YardCrm",
            "YardDrone",
            "YardErp",
            "YardHr",
            "YardOne",
            "YardStream",
          ]}
          series={[
            {
              name: "Paid Amount",
              data: [44, 55, 57, 56, 61, 58],
            },
            {
              name: "Balance",
              data: [76, 85, 101, 98, 87, 105],
            },
          ]}
          colors={["#1B4E9B", "#0EA861"]}
        />
      </div>
      <div className="border border-primary/20 p-2 rounded-md relative">
        <div className=" absolute right-1 top-1">
          <img className=" h-4 w-fit" src="/admin/child_company/Yardcrm.png" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-sm">
            Purchase Order : Rs. 1,00,000
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-primary-text">Balance: Rs. 50,000</p>
            {/* <button
              className=" text-xs border-2 border-primary/50 p-1 rounded-md"
              onClick={() => push(`${asPath}/company/company-details`)}
            >
              View More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
