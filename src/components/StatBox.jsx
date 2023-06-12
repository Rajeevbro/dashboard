import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ progress, iconImage, number, infoHead }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      sx={{ background: colors.primary[600] }}
      width={"100%"}
      padding={"2%"}
      color={colors.greenAccent[500]}
      margin={"0.7rem"}
    >
      <Stack spacing={1}>
        {iconImage}
        <Typography variant="h12">{number}</Typography>
        <Typography variant="h12">{infoHead}</Typography>
      </Stack>
      <Stack spacing={2}>
        <ProgressCircle progress={progress} />
        <Typography variant="h12">+{progress * 100}%</Typography>
      </Stack>
    </Box>
  );
};

export default StatBox;
