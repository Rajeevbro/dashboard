import React from "react";
import GeographyChart from "../../components/GeographyChart";
import { Box, Typography } from "@mui/material";

const Geography = () => {
  return (
    <Box height="80vh" width={"80vw"} p={5}>
      <Typography variant="h6">Geography Based Data</Typography>
      <GeographyChart />
    </Box>
  );
};

export default Geography;
