import React from "react";
import { mockDataContacts, mockDataInvoices } from "../../data/mockData";
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

const Contacts = () => {
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
      field: "age",
      headerName: "Age",
      width: 150,
      editable: true,
      renderHeader: () => {
        return (
          <Box display={"flex"}>
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
      field: "address",
      headerName: "Address",
      width: 250,
      editable: true,
    },
    {
      field: "city",
      headerName: "City",
      width: 250,
      editable: true,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      width: 250,
      editable: true,
    },
    {
      field: "registrarId",
      headerName: "RegistrarId",
      width: 250,
      editable: true,
    },
  ];
  return (
    <Box
      padding={"10px 10px"}
      margin={"2% 2%"}
      width={"70vw"}
      sx={{
        "& .MuiCheckbox-root.Mui-checked": {
          color: colors.redAccent[600],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.redAccent[800],
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
          backgroundColor: colors.redAccent[600],
          borderRadius: "15px",
        },
        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {
          backgroundColor: colors.redAccent[700],
          borderRadius: "20px",
        },
      }}
    >
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={mockDataContacts.map((value) => value)}
        columns={columns}
        checkboxSelection
      />
    </Box>
  );
};

export default Contacts;
