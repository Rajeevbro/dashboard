// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar

import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../data/mockData";
import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const BarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "kebab", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[200],
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 18,
              fill: colors.blueAccent[400],
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },

          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: colors.redAccent[400],
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        tooltip: {
          container: {
            background: colors.grey[900],
            fontSize: 12,
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default BarChart;
