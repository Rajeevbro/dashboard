import React from "react";
import { mockDataInvoices } from "../../data/mockData";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar, renderActionsCell } from "@mui/x-data-grid";
import {
  CalendarMonthOutlined,
  CurrencyRupee,
  EmailOutlined,
  Money,
  MoneyOutlined,
  Person2Outlined,
  PhoneAndroidOutlined,
} from "@mui/icons-material";
import { tokens } from "../../theme";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      editable: true,
      renderHeader: () => {
        return (
          <Box display={"flex"}>
            <Person2Outlined />
            <Typography>{"Name"}</Typography>
          </Box>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      editable: true,
      renderHeader: () => {
        return (
          <Box display={"flex"}>
            <EmailOutlined />
            <Typography>{"Email"}</Typography>
          </Box>
        );
      },
    },
    {
      field: "cost",
      headerName: "Cost",
      width: 150,
      editable: true,
      renderHeader: () => {
        return (
          <Box display={"flex"}>
            <CurrencyRupee />
            <Typography>Cost</Typography>
          </Box>
        );
      },
      renderCell: ({ row: { cost } }) => {
        return <Box bgcolor={colors.greenAccent[700]}>{cost}</Box>;
      },
    },
    {
      field: "phone",
      headerName: "phone",
      width: 200,
      editable: true,
      renderHeader: (param) => {
        return (
          <Box display={"flex"}>
            <PhoneAndroidOutlined />
            <Typography>{"Phone"}</Typography>
          </Box>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      editable: true,
      renderHeader: () => {
        return (
          <Box display={"flex"}>
            <EmailOutlined />
            <Typography>{"Date"}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box
      padding={"10px 10px"}
      margin={"2% 2%"}
      sx={{
        "& .MuiCheckbox-root.Mui-checked": {
          color: colors.blueAccent[600],
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
        },
      }}
    >
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={mockDataInvoices.map((value) => value)}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
      />
    </Box>
  );
};

export default Invoices;
