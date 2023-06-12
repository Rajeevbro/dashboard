import { useEffect, useState } from "react";
import { Sidebar, MenuItem, Menu, useProSidebar } from "react-pro-sidebar";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, NavLink, Navigate } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarOutlinedIcon from "@mui/icons-material/CalendarOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
// import PieChartOutlinedOutlinedIcon from "@mui/icons-material/PieChartOutlinedOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import styled from "styled-components";
import {
  BarChartOutlined,
  CalendarMonthOutlined,
  ContactsOutlined,
  FormatQuoteOutlined,
  LineAxisOutlined,
  MapOutlined,
  PieChartOutline,
} from "@mui/icons-material";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      icon={icon}
      className="mello"
      component={<Link to={to}></Link>}
      active={selected === title}
      onClick={() => setSelected(title)}
    >
      <Typography variant="h8" to={to}>
        {title}
      </Typography>
    </MenuItem>
  );
};

const Sidebarx = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dasboard");
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Box display={"flex"} sx={{}}>
      <Sidebar
        backgroundColor={colors.primary[400]}
        rootStyles={{
          border: "none",
          padding: 2,
          height: "100%",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          {!collapsed && <Typography>ADMINS</Typography>}
          <IconButton onClick={() => collapseSidebar()}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>

        {!collapsed && (
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            m={"10px"}
            p={"10px"}
          >
            <Avatar
              sx={{ width: 56, height: 56, marginBottom: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWPoHjjZcbAnMDb_PYZYLEPUffOlA1ks3TUr2vUr7&s"
            ></Avatar>
            <Typography>Rajeev Chapagain</Typography>
            <Typography variant="h9" color={colors.greenAccent[500]}>
              Vp Fancy Admmin
            </Typography>
          </Box>
        )}
        <Menu
          menuItemStyles={{
            button: {
              "&:hover": {
                background: colors.primary[400],
                color: colors.blueAccent[400],
              },
            },
          }}
        >
          {" "}
          <Item
            title={"Dasboard"}
            icon={<HomeOutlinedIcon />}
            to={"/"}
            selected={selected}
            setSelected={setSelected}
          ></Item>
          <Typography sx={{ color: colors.grey[300], m: "15px 0 5px 20px" }}>
            Data
          </Typography>
          <Item
            title={"Manage Team"}
            icon={<PeopleOutlinedIcon />}
            to={"team"}
            selected={selected}
            setSelected={setSelected}
          ></Item>
          <Item
            title={"Contact Inforamtion"}
            icon={<ContactsOutlined />}
            to={"contacts"}
            selected={selected}
            setSelected={setSelected}
          ></Item>
          <Item
            title={"Invoice Balances"}
            to={"invoices"}
            selected={selected}
            setSelected={setSelected}
            icon={<ReceiptOutlinedIcon />}
          ></Item>
          <Typography sx={{ color: colors.grey[300], m: "15px 0 5px 20px" }}>
            Pages
          </Typography>
          <Item
            title={"People Form"}
            to="form"
            selected={selected}
            setSelected={setSelected}
            icon={<PersonOutlinedIcon />}
          ></Item>
          <Item
            to="calendar"
            title={"Calender"}
            selected={selected}
            setSelected={setSelected}
            icon={<CalendarMonthOutlined />}
          ></Item>
          <Item
            to="faq"
            title={"FAQ Pages"}
            selected={selected}
            setSelected={setSelected}
            icon={<HelpOutlinedIcon />}
          ></Item>
          <Typography sx={{ color: colors.grey[300], m: "15px 0 5px 20px" }}>
            Charts
          </Typography>
          <Item
            to="bar"
            title={"Bar Chart"}
            selected={selected}
            setSelected={setSelected}
            icon={<BarChartOutlined />}
          ></Item>
          <Item
            to="pie"
            selected={selected}
            setSelected={setSelected}
            title={"Pie Chart"}
            icon={<PieChartOutline />}
          ></Item>
          <Item
            to="line"
            selected={selected}
            setSelected={setSelected}
            title={"Line Chart"}
            icon={<LineAxisOutlined />}
          ></Item>
          <Item
            to="geography"
            selected={selected}
            setSelected={setSelected}
            title={"Geography Chart"}
            icon={<MapOutlined />}
          ></Item>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebarx;
