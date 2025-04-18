"use client";

import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function ClientDocumentChart() {
  return (
    <section className="w-full lg:flex-row flex-col flex justify-between items-center gap-1">
      <div className="flex gap-1 flex-col">
        <h1 className="graph-title text-primary-text">Documents Overview</h1>
        <p className="text-sm opacity-70 text-primary-text">
          Type wise overview
        </p>
      </div>
      <ClientDocumentTypeChart />
    </section>
  );
}

const ClientDocumentTypeChart = () => {
  return (
    <ApexCharts
      type="donut"
      height={250}
      width={250}
      series={[20, 30, 20]}
      options={{
        chart: {
          width: 150,
          type: "pie",
        },
        legend: {
          position: "bottom",
        },
        colors: ["#6e63a3", "#FF4D49", "#FD8528", "#6D788D"],
        labels: ["All", "Reviewed", "Uploaded"],
      }}
    />
  );
};
