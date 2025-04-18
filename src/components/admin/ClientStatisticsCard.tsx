import { BiCloudUpload, BiPieChartAlt } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";

export const clientStatistics = [
  {
    label: "Child Company",
    value: "20",
    icon: <BiPieChartAlt />,
    iconClass: "bg-primary/10 text-primary",
  },
  {
    label: "Total Documents",
    value: "100",
    icon: <HiOutlineDocumentText />,
    iconClass: "bg-pink-blue/10 text-pink-blue",
  },
  {
    label: "Documents Uploaded",
    value: "30",
    icon: <BiCloudUpload />,
    iconClass: "bg-secondary/10 text-secondary",
  },

  {
    label: "Pending Documents",
    value: "70",
    icon: <MdWorkOutline />,
    iconClass: "bg-youtube/10 text-youtube",
  },
];

export default function ClientStatisticsCard() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="lg:col-span-4 col-span-full bg-white rounded-[10px] shadow-[0_0.25rem_1.125rem_rgba(75,70,92,0.1)] px-4 pt-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <p className="flex flex-col ">
              <span className="text-primary-text text-lg font-medium">
                Welcome Back !
              </span>
              <span className="text-sm">Your Expenses</span>
            </p>

            <p className="flex flex-col gap-1">
              <span className="text-secondary text-lg font-bold">
                INR 49.8k
              </span>
              <span>
                <button className="p-2 text-white bg-primary rounded-md text-sm cursor-pointer">
                  View Details
                </button>
              </span>
            </p>
          </div>
          <div>
            <img className="w-fit h-40" src="/admin/client/boy.png"></img>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-full admin-card">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <p className="text-primary-text text-lg font-medium">Documents</p>
            <p className="text-sm text-primary-text opacity-60">
              Updated 1 month ago
            </p>
          </div>
          <div className="lg:flex lg:justify-between grid grid-cols-2 gap-4">
            <>
              {clientStatistics.map((data, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div
                    className={`w-12 h-12 text-xl rounded-full flex items-center justify-center bg-primary/10 text-primary ${data?.iconClass}`}
                  >
                    {data?.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg">{data?.value}</p>
                    <p className="text-xs">{data?.label}</p>
                  </div>
                </div>
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
