/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type Props = {
  type: "radialBar";
  title?: string;
  radialSeries?: number[];
  radialLabel?: string[];
  className?: string;
  totalReturn?: number;
  height?: string | number;
  semiCircleColor?: string[];
};

export default function AnalyticsSemiCircle({
  radialSeries,
  radialLabel,
  height,
  className = "",
  title,
  semiCircleColor,
  totalReturn,
}: Props) {
  return (
    <div className="">
      <ApexCharts
        height={height}
        // height={"500"}
        series={radialSeries}
        options={{
          labels: radialLabel,
          // title: {
          //   text: `${title}`,
          // },

          chart: {
            // height: 50,
            type: "radialBar",
            offsetY: -20,
            sparkline: {
              enabled: true,
            },
          },
          dataLabels: {
            enabled: false,
          },

          legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "center",
            height: 40,
          },
          markers: {
            strokeWidth: 0,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: "70%",
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: "#999",
                  opacity: 1,
                  blur: 2,
                },
              },

              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  offsetY: -2,
                  fontSize: "22px",
                },
              },
            },
          },
          grid: {
            padding: {
              top: -10,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91],
            },
          },

          colors: semiCircleColor,
          // colors: ["#ff4560"],
        }}
        type={"radialBar"}
      />
    </div>
  );
}
