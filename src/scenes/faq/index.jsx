import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Stack, Box, useTheme } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { FAQData } from "../../data/mockData";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Stack
        direction={"column"}
        padding={4}
        m={2}
        sx={{ boxSizing: "border-box", overflow: "hidden scroll" }}
        height={"80vh"}
      >
        <Typography variant="h3">FAQ</Typography>
        <Typography variant="h6" color={colors.blueAccent[400]}>
          {" "}
          Frequently asked questions
        </Typography>
        {FAQData.map(({ id, Q, A }) => {
          return (
            <Accordion key={id}>
              <AccordionSummary
                expandIcon={<ExpandMoreOutlined />}
                id="panel1a-header"
              >
                <Typography color={colors.blueAccent[500]}>{Q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color={colors.greenAccent[500]}>{A}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Stack>
    </Box>
  );
};

export default FAQ;
