import React, {useEffect} from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GavelIcon from "@mui/icons-material/Gavel";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from 'next/router'
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { UserAuth } from "../context/AuthContext";
import HelpIcon from '@mui/icons-material/Help';

const drawerWidth = 180;

const menuItemList = [
  { lable: "Dashboard", icon: <DashboardIcon fontSize="small"/>, to: "/", placement: 'upper'},
  { lable: "Bids", icon: <GavelIcon fontSize="small"/>, to: "/bids", placement: 'upper' },
  { lable: "Orders", icon: <LocalGroceryStoreIcon fontSize="small"/>, to: "/orders", placement: 'upper' },
  { lable: "Incidents", icon: <QueryBuilderIcon fontSize="small"/>, to: "/incidents", placement: 'upper' },
  { lable: "EMD & ePBG", icon: <CurrencyRupeeIcon fontSize="small"/>, to: "/emdepbg", placement: 'upper' },
  { lable: "Help", icon: <HelpIcon fontSize="small"/>, to: "/help", placement: 'lower' },
  { lable: "Profile", icon: <AccountCircleIcon fontSize="small"/>, to: "/profile", placement: 'lower' },
];


const Footer = () =>{
  return(
    <>
    Copyright &copy;{new Date().getFullYear()}{" "}
  <a href='https://www.edafter.com'>Edafter</a>
    </>
  )
}

function Layout({ children }, props) {
  const {user, logout} = UserAuth();
  const router = useRouter()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeTab, setactiveTab] = React.useState();
  const [anchorElProfileMenu, setanchorElProfileMenu] = React.useState(null);

 useEffect(() => {
  let obj = menuItemList.find(o => o.to === router.pathname);
  setactiveTab(obj.lable);
}, [])

const Signout = () =>{
  logout();
}

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (event, index) => {
    setactiveTab(index);
    // close mobile drawer
    mobileOpen && setMobileOpen(false);
  };

  const handleProfileMenu = (event) => {
    setanchorElProfileMenu(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setanchorElProfileMenu(null);
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
        {menuItemList.map((text, index) => (
          text.placement == "upper" &&
          <ListItem key={index} disablePadding disableGutters>
            <Link href={text.to}>
              <ListItemButton
                sx={{ borderRadius: 5 }}
                selected={activeTab === text.lable}
                onClick={(event) => handleListItemClick(event, text.lable)}
              >
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText
                  primary={text.lable}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                  sx={{marginLeft: -2}}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        {menuItemList.map((text, index) => (
          text.placement == "lower" &&
          <ListItem key={index} disablePadding disableGutters>
            <Link href={text.to}>
              <ListItemButton
                sx={{ borderRadius: 5 }}
                dense
                selected={activeTab === text.lable}
                onClick={(event) => handleListItemClick(event, text.lable)}
              >
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText
                  primary={text.lable}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                sx={{marginLeft: -2}}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText
                  primary={<Footer/>}
                  primaryTypographyProps={{
                    fontSize: 10,
                    fontWeight: "medium",
                  }}
                />
        </ListItem>
      </List>
    </div>
  );

  const renderProfile = () =>{
    if( user == null){
      return <Link href="/login">Login</Link>;
    }
    return (<div>
      <IconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleProfileMenu}
        color="inherit"
      >
        <Avatar alt="Avatar" sx={{ width: 28, height: 28 }} src={user.photoURL?user.photoURL:"/img/default.png"}/>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElProfileMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElProfileMenu)}
        onClose={handleProfileMenuClose}
      >
        <MenuItem onClick={Signout}>Logout</MenuItem>
      </Menu>
    </div>);
  }

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
          {renderProfile()}
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
