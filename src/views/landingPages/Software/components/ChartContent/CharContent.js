import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import jsonData from "../../../../../data/fastp.json";

function CharContent(typeFiltering) {
  let LineChartYaxisA,
    LineChartYaxisT,
    LineChartYaxisG,
    LineChartYaxisC,
    LineChartYaxisN,
    LineChartYaxisGC;
  let LineChartXaxis = [];
  let index = 0;

  if (typeFiltering === "ReadUnBeforeFiltering") {
    LineChartYaxisA = jsonData.read1_before_filtering.content_curves.A;
    LineChartYaxisT = jsonData.read1_before_filtering.content_curves.T;
    LineChartYaxisG = jsonData.read1_before_filtering.content_curves.G;
    LineChartYaxisC = jsonData.read1_before_filtering.content_curves.C;
    LineChartYaxisN = jsonData.read1_before_filtering.content_curves.N;
    LineChartYaxisGC = jsonData.read1_before_filtering.content_curves.GC;
  } else if (typeFiltering === "ReadTwoBeforeFiltering") {
    LineChartYaxisA = jsonData.read2_before_filtering.content_curves.A;
    LineChartYaxisT = jsonData.read2_before_filtering.content_curves.T;
    LineChartYaxisG = jsonData.read2_before_filtering.content_curves.G;
    LineChartYaxisC = jsonData.read2_before_filtering.content_curves.C;
    LineChartYaxisN = jsonData.read2_before_filtering.content_curves.N;
    LineChartYaxisGC = jsonData.read1_before_filtering.content_curves.GC;
  } else if (typeFiltering === "ReadUnAfterFiltering") {
    LineChartYaxisA = jsonData.read1_after_filtering.content_curves.A;
    LineChartYaxisT = jsonData.read1_after_filtering.content_curves.T;
    LineChartYaxisG = jsonData.read1_after_filtering.content_curves.G;
    LineChartYaxisC = jsonData.read1_after_filtering.content_curves.C;
    LineChartYaxisN = jsonData.read1_after_filtering.content_curves.N;
    LineChartYaxisGC = jsonData.read1_before_filtering.content_curves.GC;
  } else {
    LineChartYaxisA = jsonData.read2_after_filtering.content_curves.A;
    LineChartYaxisT = jsonData.read2_after_filtering.content_curves.T;
    LineChartYaxisG = jsonData.read2_after_filtering.content_curves.G;
    LineChartYaxisC = jsonData.read2_after_filtering.content_curves.C;
    LineChartYaxisN = jsonData.read2_after_filtering.content_curves.N;
    LineChartYaxisGC = jsonData.read1_before_filtering.content_curves.GC;
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
          id: "N",
          label: "N",
          data: LineChartYaxisN,
        },
        {
          id: "GC",
          label: "GC",
          data: LineChartYaxisGC,
        },
      ]}
      width={500}
      height={300}
    />
  );
}

export default CharContent;
