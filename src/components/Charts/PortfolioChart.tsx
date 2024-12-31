import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {}

const PortfolioChart: React.FC<ApexChartProps> = () => {
  const [series] = useState<number[]>([44, 25, 20, 33]);
  const [options] = useState<any>({
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      show: false,
    },
    colors: ["#169B23", "#3245F1", "#FFA621", "#2A5E3D"],
  });

  return (
    <div className="relative  flex lg:justify-start justify-center  lg:w-1/2 w-full">
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={300}
          />
        </div>
      </div>
      <div className="absolute top-[45%] lg:left-[48%] md:left-[45%] left-[41%]">
        <h2 className="font-poppins font-medium lg:text-xl md:text-base text-sm text-textPrimary">
          4 Deals
        </h2>
      </div>
    </div>
  );
};

export default PortfolioChart;
