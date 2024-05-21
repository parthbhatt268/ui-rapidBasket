import * as React from "react";
import {
  Box,
  AppBar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Drawer,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Divider,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import avatar from "../../../Image/default_person.png"

const pages = ["Home", "Menu", "Orders", "About", "Order History"];
const settings = ["Profile", "Logout"];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setdrawerOpen] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e) => {
    if (e.target.innerText === "Logout") {
      localStorage.clear()
      window.location.href = "/"
    } else {
      navigate(`/${e.target.innerText}`);
      setAnchorElUser(null);
    }
  };

  const handleDrawerOpen = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setdrawerOpen(!drawerOpen);
  };

  const navigateItem = (item) => {
    navigate(`/${item.target.innerText.toLowerCase()}`);
  };
  const list = () => (
    <Box
      role="presentation"
      onClick={handleDrawerOpen}
      onKeyDown={handleDrawerOpen}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <KeyboardDoubleArrowLeftIcon onClick={handleDrawerOpen} />
            <Divider />
          </ListItemButton>
        </ListItem>
        {pages.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={(text) => navigateItem(text)}
          >
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Paper sx={{
              display: '-ms-flexbox',
              display: 'flex',
              height: '50px',
              backgroundColor: 'black',
              color: '#ffc1a5',
              borderRadius: '7px',
              paddingTop: '8px',
            }}>

            <FastfoodIcon sx={{ display: { xs: "none", md: "flex", paddingLeft:'5px' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "'Arial', sans-serif",
                fontWeight: 700,
                letterSpacing: ".05rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Rapid Basket
            </Typography>
            </Paper>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton color="inherit" onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Paper sx={{
              display: 'flex',
              height: '40px',
              backgroundColor: 'black',
              color: '#ffc1a5',
              borderRadius: '7px',
              paddingTop: '3px',
              marginRight: '40px',
            }}>
            <FastfoodIcon sx={{ display: { xs: "flex", md: "none", paddingLeft:'5px' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "ui-monospace",
                fontWeight: 700,
                letterSpacing: ".05rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Rapid Basket
            </Typography>
            </Paper>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "space-evenly",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={navigateItem}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={avatar}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={drawerOpen} anchor="left">
        {list()}
      </Drawer>
    </>
  );
}
export default ResponsiveAppBar;
