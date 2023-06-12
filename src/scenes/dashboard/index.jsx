import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import Line from "../../components/LineChart";
import Bar from "../../components/BarChart";
import Pie from "../../components/PieChart";
import Geography from "../../components/GeographyChart";

import { mockTransactions } from "../../data/mockData";
import { tokens } from "../../theme";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "90%",
  margin: "0.7rem 0.7rem",
  display: "flex",
  flexDirection: "column",
}));

const Dashboard = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const statBoxData = [
    {
      progress: "0.25",
      iconImage: <LocalPostOfficeIcon />,
      number: 123456,
      infoHead: "Email Sents",
    },
    {
      progress: "0.50",
      iconImage: <PointOfSaleIcon />,
      number: 6786563456,
      infoHead: "Sales Obtained",
    },
    {
      progress: "0.75",
      iconImage: <PersonAddIcon />,
      number: 3243324,
      infoHead: "New Clients",
    },
    {
      progress: "0.85",
      iconImage: <TrafficIcon />,
      number: 32141241,
      infoHead: "Traffic Received",
    },
  ];
  return (
    <Grid container spacing={1} margin={"0.2rem 0.2rem"}>
      {statBoxData.map(({ progress, iconImage, number, infoHead }) => {
        return (
          <Grid item xs={2.9}>
            <StatBox
              key={number}
              progress={progress}
              iconImage={iconImage}
              number={number}
              infoHead={infoHead}
            />
          </Grid>
        );
      })}

      <Grid item xs={8} height={"30rem"} overflow={"hidden"}>
        <StyledBox sx={{ background: color.primary[600] }}>
          <Typography>Geography Based traffic</Typography>
          <Geography />
        </StyledBox>
      </Grid>
      <Grid xs={4} height={"30rem"}>
        <StyledBox
          sx={{
            overflowX: "hidden",
            overflowY: "scroll",
            background: color.primary[600],
          }}
        >
          <Stack spacing={1}>
            {mockTransactions.map(({ txId, user, date, cost }) => {
              return (
                <Box
                  key={txId}
                  display={"flex"}
                  justifyContent={"space-between"}
                  padding={"0.2rem"}
                >
                  <Stack>
                    <Typography variant="h12">{txId}</Typography>
                    <Typography variant="h12">{user}</Typography>
                  </Stack>
                  <Typography variant="h12">{date}</Typography>
                  <Box
                    sx={{
                      padding: "2px",
                      background: color.greenAccent[500],
                      borderRadius: "5px",
                    }}
                  >
                    {" "}
                    ${cost}
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </StyledBox>
      </Grid>

      <Grid item xs={3} height={"18rem"}>
        <StyledBox sx={{ background: color.primary[600] }}>
          <Typography>Sales Quantity</Typography>
          <Bar />
        </StyledBox>
      </Grid>
      <Grid item xs={3} height={"18rem"}>
        <StyledBox sx={{ background: color.primary[600] }}>
          <Typography>Technology use</Typography>
          <Pie />
        </StyledBox>
      </Grid>
      <Grid item xs={6} height={"18rem"}>
        <StyledBox sx={{ background: color.primary[600] }}>
          <Typography>Revenue Genereated</Typography>
          <Line />
        </StyledBox>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
