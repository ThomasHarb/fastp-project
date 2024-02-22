import React from "react";
import HeatMap from "@uiw/react-heat-map";
import jsonData from "../../../../../data/fastp.json";

function Heatmap() {
  const kmer_count = jsonData.read1_after_filtering.kmer_count;
  const data = Object.entries(kmer_count).map(([kmer, count]) => [kmer, count]);
  const maxValue = Math.max(...data.map(([, count]) => count));
  console.log(data);

  return (
    <HeatMap
      value={data}
      /* width={10}
      height={10}
      max={maxValue}
      cellStyle={(value) => ({
        backgroundColor: `rgb(${(value / maxValue) * 255}, ${
          (value / maxValue) * 255
        }, ${(value / maxValue) * 255})`,
      })} */
    />
  );
}

export default Heatmap;
