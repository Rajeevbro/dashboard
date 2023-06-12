import { Box, Typography } from "@mui/material";
import React from "react";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box height={"60vh"}>
      <Typography>Sample Pie Chart</Typography>
      <PieChart />
    </Box>
  );
};

export default Pie;
