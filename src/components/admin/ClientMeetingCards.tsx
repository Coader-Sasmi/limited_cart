import { AiOutlineExport, AiOutlinePlus } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsCalendarDate, BsThreeDotsVertical } from "react-icons/bs";

export default function ClientMeetingCards() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5">
        <div className="flex flex-col gap-4 admin-card lg:col-span-4 col-span-full md:col-span-6">
          <div className="flex justify-between">
            <h2 className="text-primary-text text-lg font-medium">Meetings</h2>
            <BsThreeDotsVertical className="cursor-pointer" />
          </div>
          <button className="flex gap-2 p-2 btn-primary justify-center items-center cursor-pointer">
            <AiOutlinePlus />
            <span>Request Meeting</span>
          </button>
          <div className="text-primary-text text-md font-medium">
            Activity
            {/* <div className="flex flex-col gap-3 p-4">
              {meetingsStatusArray.map((meeting, i) => (
                <div key={i} className="ring-1 ring-gray-300 p-2 rounded-sm">
                  <div className="flex justify-between items-center">
                    <p className="flex flex-col gap-1">
                      <span
                        className={`${meeting.statusText} text-sm font-semibold`}
                      >
                        {meeting.status}
                      </span>
                      <span className="text-xs">Additional Text</span>
                    </p>
                    <p className="ring-1 ring-secondary/30 bg-secondary/20 text-secondary py-1 px-2 text-xs rounded-sm">
                      {meeting.count}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-4 admin-card lg:col-span-4 col-span-full md:col-span-6">
          <div className="flex justify-between">
            <h2 className="text-primary-text text-lg font-medium">
              Schedule Details
            </h2>
            <AiOutlineExport className="cursor-pointer" />
          </div>
          <div className="text-primary-text text-sm font-medium">
            Do not miss scheduled Meeting
          </div>
          {/* <div className="flex flex-col gap-3">
            {meetingScheduleArray.map((data, i) => (
              <div key={i} className="ring-1 ring-gray-300 p-3 rounded-sm">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between ">
                    <p className="flex gap-1 text-xs items-center">
                      <BsCalendarEvent className="text-primary" />
                      {data?.date}
                    </p>
                    <p
                      className={`ring-1 text-xs rounded-sm p-1 ${data?.timeStyle}`}
                    >
                      {data.time}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-sm">{data?.title}</p>
                    <p className="text-xs">{data?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
        <div className="flex flex-col gap-4 admin-card lg:col-span-4 col-span-full md:col-span-6">
          <div className="flex justify-center pt-2 bg-pink-blue/20  rounded-md">
            <img
              className="w-fit h-44 "
              src="/admin/client/girl-with-laptop.png"
            />
          </div>
          <div className="text-primary-text text-lg font-medium">
            Upcoming Webinar
          </div>
          <div className="text-sm text-primary-text ">
            Next Generation Frontend Architecture Using Layout Engine And React
            Native Web.
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <p className="bg-pink-blue/10 text-pink-blue p-2 rounded-md">
                <BsCalendarDate className={`text-lg cursor-pointer`} />
              </p>

              <p className="flex flex-col ">
                <span className="text-sm">30 Oct, 2023</span>
                <span className="text-xs">Date</span>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="bg-pink-blue/10 text-pink-blue p-2 rounded-md">
                <BiTimeFive className={`text-xl cursor-pointer`} />
              </p>

              <p className="flex flex-col ">
                <span className="text-sm">30 Minutes</span>
                <span className="text-xs">Duration</span>
              </p>
            </div>
          </div>
          <button className="btn-primary justify-center items-center cursor-pointer p-2">
            Join the Event
          </button>
        </div>
      </div>
    </div>
  );
}
