import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import React from "react";
import { mockBarData, mockDataTeam } from "../../data/mockData";
import { Box, Typography, useTheme } from "@mui/material";
import { flexibleCompare } from "@fullcalendar/core/internal";
import { tokens } from "../../theme";
import {
  AdminPanelSettingsOutlined,
  SecurityOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "age", headerName: "Age", width: 250 },
    { field: "phone", headerName: "Phone", width: 250 },
    {
      field: "access",
      headerName: "Access",
      width: 120,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width={"60px"}
            backgroundColor={
              access === "admin"
                ? colors.redAccent[400]
                : colors.greenAccent[400]
            }
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              color: colors.primary[400],
              borderRadius: "4px",
              border: "none",
            }}
          >
            {access === "manager" && <SecurityOutlined />}
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "user" && <VerifiedUserOutlined />}
            <Typography>{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box
      sx={{
        height: 700,
        width: "100%",
        marginTop: "50px",
        padding: "20px 20px",
      }}
    >
      <DataGrid
        sx={{
          "& .MuiCheckbox-root.Mui-checked": {
            color: colors.greenAccent[500],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenAccent[800],
          },
        }}
        columns={columns}
        rows={mockDataTeam.map((team) => team)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
      ></DataGrid>
    </Box>
  );
};

export default Team;
