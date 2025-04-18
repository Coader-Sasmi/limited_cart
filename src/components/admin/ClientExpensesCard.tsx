import { AnalyticsSemiCircle, ClientDocumentChart } from ".";

export default function ClientExpensesCard() {
  //   const [selectedMonth, setSelectedMonth] = useState(2);
  return (
    <div>
      <div className="flex flex-col gap-4 w-full h-full ">
        <div className="gap-4 grid grid-cols-12">
          <div className="admin-card md:col-span-4 col-span-full ">
            <div className="flex flex-col gap-8 ">
              <h2 className="text-sm text-primary-text">
                Expenses more than last month
              </h2>
              <AnalyticsSemiCircle
                height={270}
                type="radialBar"
                className="w-full "
                radialLabel={["Total Expenses"]}
                radialSeries={[75]}
                // title={"Expenses"}
                semiCircleColor={["#ff4560"]}
              />
            </div>
          </div>
          <div className="lg:col-span-8 md:col-span-8 col-span-12 admin-card rounded-md flex flex-col">
            <div className="flex flex-col gap-1">
              <h1 className="text-primary-text text-lg font-medium">
                Profit Percentage
              </h1>
              <p className="text-xs text-primary-text opacity-60">
                Monthly Report
              </p>
            </div>
            <div className="flex items-end admin-gap">
              <div className="flex flex-col w-1/4 gap-3">
                <div className="flex flex-col gap-2">
                  {/* <p className="text-[10px] w-fit px-1.5 py-1 rounded-md tracking-tight bg-primary/10 text-primary">
                    {monthlyClientProfitReport[selectedMonth]?.month}
                  </p>
                  <p className="text-3xl font-medium text-primary-text">
                    {monthlyClientProfitReport[selectedMonth]?.count}
                  </p> */}
                </div>
              </div>

              <div className="flex w-3/4 items-center justify-around gap-5">
                {/* {monthlyClientProfitReport.map((data, i) => (
                  <div className="flex items-center flex-col gap-2" key={i}>
                    <div
                      onClick={() => setSelectedMonth(i)}
                      className="w-3 flex overflow-hidden cursor-pointer items-end rounded-lg h-28"
                    >
                      <div
                        className={`w-full common-transition rounded-lg ${
                          selectedMonth === i
                            ? "bg-primary/50"
                            : "bg-primary/10 w-0"
                        }`}
                        style={{ height: `${data?.count}%` }}
                      ></div>
                    </div>
                    <p className="text-sm">{data?.title}</p>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
        <div className="admin-bg h-full rounded-[10px]  ">
          <ClientDocumentChart />
        </div>
      </div>
    </div>
  );
}
