import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";

const GeographyChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
        {
          id: "gradient",
          type: "linearGradient",
          colors: [
            {
              offset: 0,
              color: "#000",
            },
            {
              offset: 100,
              color: "inherit",
            },
          ],
        },
      ]}
      fill={[
        {
          match: {
            id: "CAN",
          },
          id: "dots",
        },
        {
          match: {
            id: "CHN",
          },
          id: "lines",
        },
        {
          match: {
            id: "ATA",
          },
          id: "gradient",
        },
      ]}
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: colors.grey[200],
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
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
    />
  );
};

export default GeographyChart;
