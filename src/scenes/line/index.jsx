import React from "react";
import LineChart from "../../components/LineChart";
import { Box, Typography } from "@mui/material";

const Line = () => {
  return (
    <Box height="70vh">
      <Typography variant="h6">Revenue Generated</Typography>

      <LineChart />
    </Box>
  );
};

export default Line;
