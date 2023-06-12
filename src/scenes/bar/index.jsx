import { Box, Typography } from "@mui/material";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box height={"60vh"} width={"60vw"} m={"20px 220px"}>
      <Typography variant="h6">Sales Quantity</Typography>
      <BarChart />
    </Box>
  );
};

export default Bar;
