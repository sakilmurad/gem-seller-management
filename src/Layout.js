import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import Link from 'next/link'
import Avatar from '@mui/material/Avatar';

import DashboardIcon from "@mui/icons-material/Dashboard";
import GavelIcon from "@mui/icons-material/Gavel";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 240;

const upperMenu = [
  { lable: "Dashboard", icon: <DashboardIcon />, to: "/" },
  { lable: "Bids", icon: <GavelIcon />, to: "/bids" },
  { lable: "Orders", icon: <LocalGroceryStoreIcon />, to: "/orders" },
  { lable: "Incidents", icon: <QueryBuilderIcon />, to: "/incidents" },
  { lable: "EMD & ePBG", icon: <CurrencyRupeeIcon />, to: "/emdepbg" },
];

const lowerMenu = [
  { lable: "Profile", icon: <AccountCircleIcon />, to: "/profile" },
  { lable: "Settings", icon: <SettingsIcon />, to: "/settings" },
];

function Layout({ children }, props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState("Dashboard");
  const [activeTab, setactiveTab] = React.useState("Dashboard");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setactiveTab(index);
  };

  const drawer = (
    <div>
      <Image
        src="https://res.cloudinary.com/dl3tfsbn5/image/upload/c_scale,w_120/v1643042686/new_full_logo_with_white_back_kiwh0v.svg"
        alt="Logo"
        className="logo"
        width={120}
        height={36}
      />
      <Divider />
      <List sx={{ padding: 0 }}>
        {upperMenu.map((text, index) => (
          <ListItem key={text} disablePadding disableGutters>
            <Link href={text.to}>
            <ListItemButton
              sx={{ borderRadius: 5 }}
              selected={selectedIndex === text.lable}
              onClick={(event) => handleListItemClick(event, text.lable)}
            >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText
                primary={text.lable}
                primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
              />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        {lowerMenu.map((text, index) => (
          <ListItem key={text} disablePadding disableGutters>
            <Link href={text.to}>
            <ListItemButton
              sx={{ borderRadius: 5 }}
              dense
              selected={selectedIndex === text.lable}
              onClick={(event) => handleListItemClick(event, text.lable)}
            >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText
                primary={text.lable}
                primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
              />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        color="inherit"
      >
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {activeTab}
          </Typography>
          <Avatar sx={{ bgcolor: "orange", width: 34, height: 34 }}>N</Avatar>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar variant="dense" />
        {children}
        <Footer />
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
