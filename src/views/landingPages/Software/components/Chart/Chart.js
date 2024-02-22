import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import jsonData from "../../../../../data/fastp.json";

function Chart(typeFiltering) {
  let LineChartYaxisA,
    LineChartYaxisT,
    LineChartYaxisG,
    LineChartYaxisC,
    LineChartYaxisM;
  let LineChartXaxis = [];
  let index = 0;

  if (typeFiltering === "ReadUnBeforeFiltering") {
    LineChartYaxisA = jsonData.read1_before_filtering.quality_curves.A;
    LineChartYaxisT = jsonData.read1_before_filtering.quality_curves.T;
    LineChartYaxisG = jsonData.read1_before_filtering.quality_curves.G;
    LineChartYaxisC = jsonData.read1_before_filtering.quality_curves.C;
    LineChartYaxisM = jsonData.read1_before_filtering.quality_curves.mean;
  } else if (typeFiltering === "ReadTwoBeforeFiltering") {
    LineChartYaxisA = jsonData.read2_before_filtering.quality_curves.A;
    LineChartYaxisT = jsonData.read2_before_filtering.quality_curves.T;
    LineChartYaxisG = jsonData.read2_before_filtering.quality_curves.G;
    LineChartYaxisC = jsonData.read2_before_filtering.quality_curves.C;
    LineChartYaxisM = jsonData.read2_before_filtering.quality_curves.mean;
  } else if (typeFiltering === "ReadUnAfterFiltering") {
    LineChartYaxisA = jsonData.read1_after_filtering.quality_curves.A;
    LineChartYaxisT = jsonData.read1_after_filtering.quality_curves.T;
    LineChartYaxisG = jsonData.read1_after_filtering.quality_curves.G;
    LineChartYaxisC = jsonData.read1_after_filtering.quality_curves.C;
    LineChartYaxisM = jsonData.read1_after_filtering.quality_curves.mean;
  } else {
    LineChartYaxisA = jsonData.read2_after_filtering.quality_curves.A;
    LineChartYaxisT = jsonData.read2_after_filtering.quality_curves.T;
    LineChartYaxisG = jsonData.read2_after_filtering.quality_curves.G;
    LineChartYaxisC = jsonData.read2_after_filtering.quality_curves.C;
    LineChartYaxisM = jsonData.read2_after_filtering.quality_curves.mean;
  }

  for (let elem of LineChartYaxisA) {
    LineChartXaxis.push(index);
    index++;
  }

  return (
    <LineChart
      xAxis={[{ data: LineChartXaxis }]}
      series={[
        {
          id: "A",
          label: "A",
          data: LineChartYaxisA,
        },
        {
          id: "T",
          label: "T",
          data: LineChartYaxisT,
        },
        {
          id: "G",
          label: "G",
          data: LineChartYaxisG,
        },
        {
          id: "C",
          label: "C",
          data: LineChartYaxisC,
        },
        {
          id: "Mean",
          label: "Mean",
          data: LineChartYaxisM,
        },
      ]}
      width={500}
      height={300}
    />
  );
}

export default Chart;
