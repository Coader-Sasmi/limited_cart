/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function LeadColumnGraph({
  series,
  categories,
  colors,
  labels,
  title,
  barHeight,
}: {
  series?: any[];
  categories?: string[] | number[];
  colors?: string[];
  labels?: string[];
  title?: string;
  barHeight?: string | number;
}) {
  return (
    <div>
      <ApexCharts
        height={barHeight}
        options={{
          title: {
            text: title,
            align: "center",
            style: {
              fontWeight: "700",
              fontSize: "16px",
              color: "black",
            },
          },
          chart: {
            type: "bar",
            height: 350,
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
          xaxis: {
            categories: categories,
            position: "bottom",
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                },
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          fill: {
            opacity: 1,
          },
          legend: {
            position: "bottom",
            offsetX: 0,
          },

          colors: colors,
        }}
        series={series}
        type={"bar"}
      />
    </div>
  );
}
